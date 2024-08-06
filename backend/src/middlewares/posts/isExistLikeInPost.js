<<<<<<< HEAD
import addCountersInPost from "../../libs/Posts/addCountersInPost.js";
import Post from "../../models/Post.js";
import deleteNotification from "../../libs/Notifications/deleteNotification.js";
import User from "../../models/User.js";
import mongoose from "mongoose";
import Notification from "../../models/Notification.js";

export default async (req, res, next) => {
    try {
        const idPost = new mongoose.Types.ObjectId(req.params.idPost);

        const postFound = await Post.findById(idPost);
       
        if(!postFound) return res.status(200).json({ post: [], message: 'Post not found!', status: 404 });
        
        const postBy = await User.findOne({_id: postFound.postBy}).select("_id username imgProfile thumbnail isPrivate");
        const userAuth = req.userAuth;
        const isExistLike = postFound.likes.findIndex(like => like.idUser.equals(userAuth._id));

        if (isExistLike !== -1) {

            const foundLikeByUserAuth = postFound.likes.find(like => like.idUser.equals(userAuth._id));
            const foundNotification = await Notification.findOne({
                _id: foundLikeByUserAuth.idNotification,
            })

            // eliminar notificacion en base de datos
            await deleteNotification({idAuth: userAuth._id, userID: postBy._id, idNotification: foundNotification._id});

            // // eliminar like en Post
            await postFound.likes.splice(isExistLike, 1);

            await addCountersInPost(postFound);
            
            return res.status(200).json({ message: 'Delete like!', status: 200 });
        }

        req.postFound = postFound;
        req.postBy = postBy;
        next();
    } catch (error) {
        console.error('Ocurrio un error en el middleware isExistLikeInPost.js. Error: ', error);
        next(error);
    }
}

=======
import addCountersInPost from "../../libs/Posts/addCountersInPost.js";
import Post from "../../models/Post.js";
import deleteNotification from "../../libs/Notifications/deleteNotification.js";
import User from "../../models/User.js";
import mongoose from "mongoose";
import Notification from "../../models/Notification.js";

export default async (req, res, next) => {
    try {
        const idPost = new mongoose.Types.ObjectId(req.params.idPost);

        const postFound = await Post.findById(idPost);
       
        if(!postFound) return res.status(200).json({ post: [], message: 'Post not found!', status: 404 });
        
        const postBy = await User.findOne({_id: postFound.postBy}).select("_id username imgProfile thumbnail isPrivate");
        const userAuth = req.userAuth;
        const isExistLike = postFound.likes.findIndex(like => like.idUser.equals(userAuth._id));

        if (isExistLike !== -1) {

            const foundLikeByUserAuth = postFound.likes.find(like => like.idUser.equals(userAuth._id));
            const foundNotification = await Notification.findOne({
                _id: foundLikeByUserAuth.idNotification,
            })

            // eliminar notificacion en base de datos
            await deleteNotification({idAuth: userAuth._id, userID: postBy._id, idNotification: foundNotification._id});

            // // eliminar like en Post
            await postFound.likes.splice(isExistLike, 1);

            await addCountersInPost(postFound);
            
            return res.status(200).json({ message: 'Delete like!', status: 200 });
        }

        req.postFound = postFound;
        req.postBy = postBy;
        next();
    } catch (error) {
        console.error('Ocurrio un error en el middleware isExistLikeInPost.js. Error: ', error);
        next(error);
    }
}

>>>>>>> b3173dc1 (first commit in Ubuntu)
