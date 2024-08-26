import newNotification from "../libs/Notifications/newNotification.js";
import Comment from "../models/Comment.js";
import Post from "../models/Post.js";
import { likeComment_message, newComment_message } from "../libs/messages.js";
import typeNotification from '../libs/Notifications/typeNotification.js';
import mongoose from "mongoose";
import addCountersInComment from "../libs/Posts/addCountersInComment.js";

export const handleLikeComment = async (req, res) => {
    try {
        const idAuth = req.idUser;
        const userAuth = req.userAuth;
        const foundComment = req.foundComment;
        if (!foundComment) return res.status(404).json({ error: "Not found comment!", status: 404 });

        const foundPost = await Post.findById(foundComment.referenceId);

        const newNotif = await newNotification({
            userID: foundComment.commentBy,
            userAuth,
            type: "like",
            idPost: foundComment.referenceId,
            thumbnailPost: foundPost.thumbnail,
            message: likeComment_message(userAuth)
        })

        foundComment.likes.push({ idUser: idAuth, idNotification: newNotif._id })

        addCountersInComment(foundComment);

        await foundComment.save();

        return res.status(200).json({ message: "Like comment!", status: 200 });
    } catch (error) {
        console.error("Ocurrio un error al agregar like al comentario. handleLikeComment. Error: ", error);
        return res.status(error.status).json({ error: error.error, status: error.status });
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

        const populateComment = await Comment.findOne(newComment._id)
            .populate({
                path: "commentBy",
                select: "_id username thumbnail isPrivate",
            })

        return res.status(200).json({ message: 'Added comment!', comment: populateComment, idPost, status: 200 });
    } catch (error) {
        console.error('Ocurrio un error en comment.controllers.js, "addComment()"', { error: error.message, status: error.status });
        return res.status(500).json({ error: error.message, status: error.status });
    }
}