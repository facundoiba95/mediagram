import mongoose from "mongoose";
import { acceptFollow_message, pendingFollow_message } from "../../libs/messages.js";
import newNotification from "../../libs/Notifications/newNotification.js";
import typeNotification from "../../libs/Notifications/typeNotification.js";

export default async (req, res, next) => {
    try {
        const userToFollow = req.foundUserFollower;
        const userToFollowing = req.foundUserFollowing;
        const foundFollowUpRequest = userToFollow.followUpRequest.filter(request => request.sentBy.find(usr => usr.equals(userToFollowing._id)));

        const newFollower = {
            username: userToFollowing.username,
            _id: new mongoose.Types.ObjectId(userToFollowing._id)
        }

        await handleFollowUpRequest(userToFollow, newFollower, foundFollowUpRequest);

        next();
    } catch (error) {
        console.error('Ocurrio un error en middleware followUpRequest.js().Error: ', error.message)
        next(error);
    }
}


const handleFollowUpRequest = async (userToFollow, newFollower, foundFollowUpRequest) => {
    const { isPrivate, username } = userToFollow;

    if (isPrivate) {
        if (foundFollowUpRequest.length) {
            foundFollowUpRequest[0].status = 'PENDING';
            await userToFollow.save();
            return await Promise.reject({ error: `Se envio la solicitud de seguimiento a "${username}"`, status: 201 })
        }

        // crear notificacion 
        const addNotification = await newNotification({
            userID: userToFollow._id,
            type: typeNotification.FOLLOWER,
            message: pendingFollow_message(newFollower),
            status: "PENDING",
            userAuth: newFollower
        });

        userToFollow.followUpRequest.unshift({
            status: 'PENDING',
            sentBy: newFollower,
            _id: addNotification._id
        })

        await userToFollow.save();
        return await Promise.reject({ error: `Se envio la solicitud de seguimiento a "${username}"`, status: 201 })
    } else {
        if (foundFollowUpRequest.length) {
            foundFollowUpRequest[0].status = 'ACCEPT';
            await userToFollow.save();
            return;
        }

        // crear notificacion
        const addNotification = await newNotification({
            userID: userToFollow._id,
            type: typeNotification.FOLLOWER,
            message: acceptFollow_message(newFollower),
            status: "ACCEPT",
            userAuth: newFollower
        });

        userToFollow.followUpRequest.unshift({
            status: 'ACCEPT',
            sentBy: newFollower._id,
            _id: addNotification._id
        })

        await userToFollow.save();
    }
}