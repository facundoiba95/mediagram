import mongoose from "mongoose";
import Notification from "../../../models/Notification.js";
import User from "../../../models/User.js";

export default async ( postedBy, thumbnailPost, idPost, idComment, userAuth ) => {
    try {
        const _idPost = new mongoose.Types.ObjectId(idPost);
        const _idComment = new mongoose.Types.ObjectId(idComment);
        const foundUserToNotification = await User.findOne({username: postedBy.username});
        const createdBy = {
            username: userAuth.username,
            thumbnail: userAuth.thumbnail,
            _id: userAuth._id
        };

        const newNotification = new Notification({
            type: 'comment',
            content: {
                message: `${ userAuth.username } ha comentado tu post!`,
                imgContent: thumbnailPost,
                idPost: _idPost,
                idContent: _idComment
            },
            createdBy: createdBy,
        });

        foundUserToNotification.notifications.unshift(newNotification._id);
        
        await foundUserToNotification.save();
        await newNotification.save();
        
    } catch (error) {
        console.error('Ocurrio un error al crear la notificacion "addCommentNotification.js". Error: ', error)
    }
};