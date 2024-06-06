import mongoose from "mongoose";
import Notification from "../../../models/Notification.js";
import User from "../../../models/User.js";


// @params thumbnailPost = String
// @params idPost = ObjectId
// @params userAuth = Object
// @params listReferTo = [Object]
export default async (thumbnailPost, idPost, userAuth, listReferTo ) => {
    try {
        const _idPost = new mongoose.Types.ObjectId(idPost);
        const userIds = listReferTo.map(usr => usr._id);
        const foundUserToNotification = await User.find({_id: {$in: userIds}});

        const createdBy = {
            username: userAuth.username,
            thumbnail: userAuth.thumbnail,
            _id: userAuth._id
        };

        
        for (let i = 0; i < foundUserToNotification.length; i++) {
            const newNotification = new Notification({
                type: 'referTo',
                content: {
                    message: `${userAuth.username} te ha mencionado en una publicación.!`,
                    imgContent: thumbnailPost,
                    idPost: _idPost
                },
                createdBy: createdBy,
            });

            const user = foundUserToNotification[i];
            user.notifications.unshift(newNotification._id)

            await newNotification.save();
            await user.save();
        }
    
    } catch (error) {
        console.error('Ocurrio un error al crear la notificacion "referToNotification.js". Error: ', error)
    }
};