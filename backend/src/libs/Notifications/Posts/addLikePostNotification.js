import mongoose from "mongoose";
import Notification from "../../../models/Notification.js";
import User from "../../../models/User.js";

export default async ( postedBy, thumbnailPost, idPost, userAuth ) => {
    try {
        const _idPost = new mongoose.Types.ObjectId(idPost);
        const foundUserToNotification = await User.findOne({username: postedBy.username});
        const createdBy = {
            username: userAuth.username,
            thumbnail: userAuth.thumbnail,
            _id: userAuth._id
        };

        const newNotification = new Notification({
            type: 'like',
            content: {
                message: `A ${ userAuth.username } le gusta tu post!`,
                imgContent: thumbnailPost,
                idPost: _idPost
            },
            createdBy: createdBy,
        });

        foundUserToNotification.notifications.unshift(newNotification._id);
        
        await foundUserToNotification.save();
        await newNotification.save();
        
    } catch (error) {
        console.error('Ocurrio un error al crear la notificacion "addLikePostNotification.js". Error: ', error)
    }
};