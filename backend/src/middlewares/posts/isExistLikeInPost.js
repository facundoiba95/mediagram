import addCountersInPost from "../../libs/Posts/addCountersInPost.js";
import Post from "../../models/Post.js";
import deleteNotification from "../../libs/Notifications/deleteNotification.js";
import User from "../../models/User.js";

export default async (req, res, next) => {
    try {
        const { idPost } = req.params;
        const foundPost = await Post.findById(idPost);
       
        if(!foundPost) return res.status(200).json({ post: [], message: 'Post not found!', status: 404 });
        
        const postBy = await User.findOne({_id: foundPost.postBy}).select("_id username imgProfile thumbnail isPrivate");
        const userAuth = req.userAuth;
        const isExistLike = foundPost.likes.findIndex(idUser => idUser.equals(userAuth._id));

        if (isExistLike !== -1) {
            await deleteNotification(userAuth._id, postBy._id, 'like')
            await foundPost.likes.splice(isExistLike, 1);

            await addCountersInPost(foundPost)
            
            return res.status(200).json({ message: 'Delete like!', status: 200 });
        }

        req.postBy = postBy;
        next();
    } catch (error) {
        console.error('Ocurrio un error en el middleware isExistLikeInPost.js. Error: ', error);
        next(error);
    }
}

