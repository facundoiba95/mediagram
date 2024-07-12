/*
    la variable "foundFollowUpRequest" busca si ya existe un documento con la followUpRequest del usuario que envia la solicitud ( userToFollowing ),
    si esto existe, se reemplazan los datos, o cambia el estado de la solicitud.
    si no existe, se crea un documento nuevo con los datos del usuario solicitante dentro del usuario a seguir.

*/

import mongoose from "mongoose";
import followUpRequestNotification from "../../libs/Notifications/Users/followUpRequest/followUpRequestNotification.js";
import createFollowUpNotification from "../../libs/Notifications/Users/followUpRequest/createFollowUpNotification.js";
import { acceptFollow_message, pendingFollow_message } from "../../libs/messages.js";

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

        userToFollow.followUpRequest.unshift({
            status: 'PENDING',
            sentBy: newFollower
        })

        await userToFollow.save();
        await followUpRequestNotification(userToFollow, { username: newFollower.username, _id: newFollower._id }, 'PENDING', pendingFollow_message(newFollower));
        return await Promise.reject({ error: `Se envio la solicitud de seguimiento a "${username}"`, status: 201 })
    } else {
        if (foundFollowUpRequest.length) {
            foundFollowUpRequest[0].status = 'ACCEPT';
            await userToFollow.save();
            return;
        }

        userToFollow.followUpRequest.unshift({
            status: 'ACCEPT',
            sentBy: newFollower._id
        })

        await createFollowUpNotification({ username: newFollower.username, _id: newFollower._id }, userToFollow._id,"follower","ACCEPT", acceptFollow_message(newFollower) )
        await userToFollow.save();
    }
}