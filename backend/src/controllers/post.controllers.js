import cloudinary from 'cloudinary';
import fs from 'fs-extra';
import Post from '../models/Post.js';
import User from '../models/User.js';
import mongoose, { mongo } from 'mongoose';
import { config } from 'dotenv';
import generateThumbnail from '../libs/generateThumbnail.js';
import addPostToUser from '../libs/addPostToUser.js';

import addCountersInPost from '../libs/Posts/addCountersInPost.js';
import addCommentNotification from '../libs/Notifications/Posts/addCommentNotification.js';
import addLikePostNotification from '../libs/Notifications/Posts/addLikePostNotification.js';
import handleRestrictPosts from '../libs/Posts/handleRestrictPosts.js';
import referToNotification from '../libs/Notifications/Posts/referToNotification.js';
config();

export const EXCLUIVE_POST = "EXCLUSIVEPOST";

export const createPost = async (req, res) => {
    try {
        const { location, description, typePost } = req.body;
        const referTo = JSON.parse(req.body.referTo);
        const postBy = new mongoose.Types.ObjectId(req.body.postBy);
        const userAuth = req.userAuth;

        const newPost = new Post({
            typePost,
            postBy,
            referTo,
            description,
            location
        });

        const result = await cloudinary.v2.uploader.upload(req.file.path, {
            folder: 'mediagram/posts'
        }); // subir archivo original
        newPost.imgPost = `${result.secure_url}`;// guarda la ruta de archivo original

        await generateThumbnail(req, res);
        const thumbnailPath = `${req.file.path}`; // Ruta para la miniatura
        const resultThumbnail = await cloudinary.v2.uploader.upload(`${thumbnailPath}-thumbnail.jpeg`, {
            folder: 'mediagram/posts'
        }); // subir archivo miniatura
        newPost.thumbnail = `${resultThumbnail.secure_url}`;// guarda la ruta de la miniatura


        await fs.unlink(`${thumbnailPath}-thumbnail.jpeg`)   // elimina archivo local de miniatura  
        await fs.unlink(req.file.path); // elimina archivo local original
        await newPost.save();
        await addPostToUser(postBy, newPost._id);
        await referToNotification(newPost.thumbnail, newPost._id, userAuth,referTo)

        return res.status(200).json({ message: 'El post se creó exitosamente!', post: [], status: 200 });
    } catch (error) {
        console.error('Ocurrio un error en post.controllers.js, "createPost()"', { error: error.message, status: error.status });
        return res.status(500).json({ error: error.message, status: error.status });
    }
}

export const getPosts = async (req, res) => {
    try {
        const foundUser = req.userSelected;
        const idAuth = req.idUser;

        const getPosts = await handleRestrictPosts(foundUser, idAuth)

        if (!getPosts.length) return res.status(404).json({ error: 'No se encontraron posts!', status: 404, post: [] });
        return res.status(200).json({ message: 'Se encontraron estos posts!', post: getPosts, status: 200 });

    } catch (error) {
        console.error('Ocurrio un error en post.controllers.js, "getPosts()"', { error: error.message, status: error.status });
        return res.status(500).json({ error: error.message, status: error.status });
    }
}

export const getPostByID = async (req, res) => {
    try {
        const foundedPost = req.associatePostAndUser;
        return res.status(200).json({ message: 'Founded post!', post: foundedPost, status: 200 });
    } catch (error) {
        console.error('Ocurrio un error en post.controllers.js, "getPostByID()"', { error: error.message, status: error.status });
        return res.status(500).json({ error: error.message, status: error.status });
    }
}

export const getPostByFollowings = async ( req,res ) => {
    try {
        const postByFollowings = req.postByFollowings;
        const exclude_ExclusivePosts = postByFollowings.filter(post => post.typePost !== EXCLUIVE_POST)

        return res.status(200).json({ post: exclude_ExclusivePosts, status: 200, message: 'Founded posts' })
    } catch (error) {
        console.error('Ocurrio un error en post.controllers.js, "getPostsByFollowings()"', { error: error.message, status: error.status });
        return res.status(500).json({ error: error.message, status: error.status });
    }
}

export const getPostsByCloseList = async ( req,res ) => {
    try {
        const postByFollowings = req.postByFollowings;

    } catch (error) {
        console.error('Ocurrio un error en post.controllers.js, "getPostsByCloseList()"', { error: error.message, status: error.status });
        res.status(500).json({ error: error.message, status: error.status });
    }
}

export const addComment = async (req, res) => {
    try {
        const { content, _idPost, postBy } = req.body;
        const { username, thumbnail, _id } = req.userAuth;

        const newComment = {
            _id: new mongoose.Types.ObjectId(),
            _idPost: new mongoose.Types.ObjectId(_idPost),
            sender: {
                username,
                thumbnail: thumbnail ? thumbnail : '',
                _id
            },
            content
        }

        const addCommentInPost = await Post.findByIdAndUpdate(_idPost,
            { $push: { comments: newComment } },
            { new: true }
        )

        addCommentInPost.counterComments = addCommentInPost.comments.length;
        addCommentInPost.counterLikes = addCommentInPost.likes.length;
        addCommentInPost.counterViews = addCommentInPost.views.length;

        if (username !== postBy.username) {
            await addCommentNotification(postBy, addCommentInPost.thumbnail, addCommentInPost._id, newComment._id, req.userAuth);
        };
        const addPostedBy = [addCommentInPost._doc].map(item => {
            return {
                ...item,
                postBy
            }
        })

        await addCommentInPost.save();
        return res.status(200).json({ post: addPostedBy, message: 'Added comment!', status: 200 });
    } catch (error) {
        console.error('Ocurrio un error en post.controllers.js, "addComment()"', { error: error.message, status: error.status });
        return res.status(500).json({ error: error.message, status: error.status });
    }
}

export const handleLikeToPost = async (req, res) => {
    try {
        const { thumbnail, username, _id, idPost, postBy } = req.body;
        const userAuth = req.userAuth;

        const newLike = {
            username,
            thumbnail: thumbnail ? thumbnail : '',
            _id
        }

        const addLikeToPost = await Post.findByIdAndUpdate(
            idPost,
            { $push: { likes: newLike } },
            { new: true }
        )

        await addCountersInPost(addLikeToPost)
        await addLikePostNotification(postBy, addLikeToPost.thumbnail, idPost, userAuth)

        const addPostedBy = [addLikeToPost._doc].map(item => {
            return {
                ...item,
                postBy
            }
        })

        return res.status(200).json({ post: addPostedBy, message: 'Like added!', status: 200 });
    } catch (error) {
        console.error('Ocurrio un error en post.controllers.js, "handleLikePost()"', { error: error.message, status: error.status });
        return res.status(500).json({ error: error.message, status: error.status });
    }
}

export const deletePost = async (req, res) => {
    try {
        const idPost = new mongoose.Types.ObjectId(req.params.idPost);
        const userAuth = req.userAuth;

        const getIdImage = (URL) => {
            const param = URL.split('/');
            const splitParam = param[param.length - 1].split('.');
            return splitParam[0];
        }

        try {
            const media = await Post.findByIdAndDelete(idPost, { projection: { imgPost: 1, thumbnail: 1 } });

            const { thumbnail, imgPost } = media;
            const imgArr = [thumbnail, imgPost];

            for (let i = 0; i < imgArr.length; i++) {
                const pathImg = imgArr[i];
                const public_id = getIdImage(pathImg)

                await cloudinary.v2.uploader.destroy(`mediagram/posts/${public_id}`, (err, result) => {
                    if (err) {
                        console.error('Ocurrio un error al eliminar imagen de Cloudinary. Error: ', err)
                    }
                });
            }

            // eliminar idPost en usuario
            userAuth.posts = userAuth.posts.filter(post => !post.equals(idPost));
            userAuth.countPosts = userAuth.posts.length;
            userAuth.save();

            res.status(200).json({ message: 'El post fue eliminado.', status: 200 });
        } catch (error) {
            console.error('Ocurrio un error al eliminar el post. Error: ', error)
            res.status(500).json({ error: 'Ocurrio un error al eliminar el post.', status: 500 });
        }

    } catch (error) {
        console.error('Ocurrio un error en post.controllers.js, "deletePost()"', { error: error.message, status: error.status });
        res.status(error.status).json({ error: error.message, status: error.status })
    }
}

export const test_getPost = async (req, res) => {
    try {
        const idPost = new mongoose.Types.ObjectId(req.params.idPost);

        const PostWithUser = await Post.find({ _id: idPost }).populate({
            path: 'postBy',
            select: '_id username'
        })


        res.status(200).json(PostWithUser)
    } catch (error) {
        console.error('Error en test_getPost. Error: ', error)
    }
}






// userAuth.posts = userAuth.posts.filter(post => !post.equals(idPost));

// userAuth.save();
// await cloudinary.v2.uploader.destroy(req.file.path,{
//     folder: 'mediagram/posts'
// });
