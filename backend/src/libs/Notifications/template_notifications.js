import mongoose from "mongoose";
import Notification from "../../models/Notification.js";

export const notification_template_newFollower = async ({message, status, userAuth}) => {
    const newNotification = new Notification({
        type: 'follower',
        content: {
          message,
          status
        },
        createdBy: userAuth._id,
      });

      return await newNotification;
}

export const notification_template_newLike = async ({thumbnailPost, idPost, userAuth}) => {
    const _idPost = new mongoose.Types.ObjectId(idPost);
    
    const newNotification = new Notification({
        type: 'like',
        content: {
            message: `A ${ userAuth.username } le gusta tu post!`,
            imgContent: thumbnailPost,
            idPost: _idPost
        },
        createdBy: userAuth._id,
    });

    return await newNotification
}

export const notification_template_newComment = async ({ thumbnailPost, idPost, idComment, userAuth, message}) => {
    const _idPost = new mongoose.Types.ObjectId(idPost);
    const _idComment = new mongoose.Types.ObjectId(idComment);

    const newNotification = new Notification({
        type: 'comment',
        content: {
            message,
            imgContent: thumbnailPost,
            idPost: _idPost,
            idContent: _idComment
        },
        createdBy: userAuth._id,
    });

    return await newNotification;
}