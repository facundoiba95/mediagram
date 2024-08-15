import newNotification from "../libs/Notifications/newNotification.js";
import Comment from "../models/Comment.js";
import Post from "../models/Post.js";
import { newComment_message } from "../libs/messages.js";
import typeNotification from '../libs/Notifications/typeNotification.js';
import mongoose from "mongoose";

export const handleLikeComment = async (req,res) => {
    try {
        const { idComment } = req.params;
        const idAuth = req.idUser;
        const foundComment = await Comment.findOne({_id: idComment});
        
        if(!foundComment) return res.status(404).json({error: "Not found comment!", status: 404});
        
        const isExistLike = foundComment.likes.some(usr => usr.equals(idAuth));

        if(isExistLike) {
            foundComment.likes = foundComment.likes.filter(usr => !usr.equals(idAuth));
            foundComment.counterLikes = foundComment.likes.length;
            await foundComment.save();
            return res.status(200).json({message: "Dislike comment!", status: 200});
        } else {
            foundComment.likes.push(idAuth);
            foundComment.counterLikes = foundComment.likes.length;
            await foundComment.save();
            return res.status(200).json({message: "Like comment!", status: 200});
        }
    } catch (error) {
        console.error("Ocurrio un error al agregar like al comentario. handleLikeComment. Error: ", error);
        return res.status(error.status).json({error: error.error, status: error.status});
    }
}

export const addComment = async (req, res) => {
    try {
        const { content, idPost, postBy } = req.body;
        const { _id } = req.userAuth;
        const idCommentedBy = new mongoose.Types.ObjectId(_id);
        const idReference = idPost;
        const userAuth = req.userAuth;

        const newComment = new Comment({
            comment: content,
            commentBy: idCommentedBy,
            referenceId: idReference,
        })

        const addCommentInPost = await Post.findByIdAndUpdate(idPost,
            { $push: { comments: newComment._id } },
            { new: true }
        )

        addCommentInPost.counterComments = addCommentInPost.comments.length;

        if (!_id.equals(postBy)) {

            await newNotification({
                userID: postBy,
                thumbnailPost: addCommentInPost.thumbnail,
                userAuth,
                idPost: addCommentInPost._id,
                idComment: newComment._id,
                message: newComment_message(userAuth),
                type: typeNotification.COMMENT
            })
        };

        await addCommentInPost.save();
        await newComment.save();

        return res.status(200).json({ message: 'Added comment!', status: 200 });
    } catch (error) {
        console.error('Ocurrio un error en comment.controllers.js, "addComment()"', { error: error.message, status: error.status });
        return res.status(500).json({ error: error.message, status: error.status });
    }
}