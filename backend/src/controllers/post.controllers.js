import cloudinary from 'cloudinary';
import Post from '../models/Post.js';
import mongoose from 'mongoose';
import { config } from 'dotenv';
import addCountersInPost from '../libs/Posts/addCountersInPost.js';
import handleRestrictPosts from '../libs/Posts/handleRestrictPosts.js';
import { originalImage_path, originalVideo_path } from '../config/baseUrl.js';
import deleteFiles from '../libs/deleteFiles.js';
import { IMAGE, TEXT, VIDEO } from '../libs/fileExtensions.js';
import { uploadImage } from '../libs/Posts/uploadImage.js';
import { uploadVideo } from '../libs/Posts/uploadVideo.js';
import newNotification from '../libs/Notifications/newNotification.js';
import typeNotification from '../libs/Notifications/typeNotification.js';
import addPostToUser from '../libs/Posts/addPostToUser.js';
import referToNotification from '../libs/Notifications/Posts/referToNotification.js';
import addMedia from '../libs/Posts/addMedia.js';
import User from '../models/User.js';
config();

export const EXCLUIVE_POST = "EXCLUSIVEPOST";

export const createPost = async (req, res) => {
    try {
        const { description, typePost, tags, referTo, location, textContent, postBy, shareInExplore} = req.body;
        const userAuth = req.userAuth; // Object
        const mediaType = req.mediaType; // String
        const idAuth = req.idUser; // ObjectID
        
        let file_paths = [];

        const newPost = new Post({
            typePost,
            postBy,
            referTo,
            description,
            location,
            textContent,
            tags
        });

        if (!userAuth.isPrivate && textContent && tags.length) {
            newPost.shareInExplore = true;
        }

        if (!userAuth.isPrivate && shareInExplore) {
            newPost.shareInExplore = shareInExplore;
        }

        await addMedia({newPost, mediaType, file_paths, idAuth});

        file_paths = [];

        await newPost.save();
        await addPostToUser(postBy, newPost._id);
        await referToNotification(newPost.thumbnail, newPost._id, userAuth, referTo)

        return res.status(200).json({ message: 'El post se creó exitosamente!', post: [], status: 200 });
    } catch (error) {
        console.error('Ocurrio un error en post.controllers.js, createPost(). Error: ', error);
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

export const getPostByFollowings = async (req, res) => {
    try {
        const postByFollowings = req.postByFollowings;

        return res.status(200).json({ post: postByFollowings, status: 200, message: 'Founded posts' })
    } catch (error) {
        console.error('Ocurrio un error en post.controllers.js, "getPostsByFollowings()"', { error: error.message, status: error.status });
        return res.status(500).json({ error: error.message, status: error.status });
    }
}

export const handleLikeToPost = async (req, res) => {
    try {
        const userAuth = req.userAuth;
        const { idPost } = req.params;
        const postBy = req.postBy;
        const postFound = req.postFound;
        const thumbnailPost = postFound.thumbnail;

        const addNotification = await newNotification({
            userAuth,
            thumbnailPost,
            idPost,
            type: typeNotification.LIKE,
            userID: postBy._id
        })

        postFound.likes.push({ idUser: userAuth._id, idNotification: addNotification._id })

        await addCountersInPost(postFound)

        await postFound.save();

        return res.status(200).json({ message: 'Like added!', status: 200 });
    } catch (error) {
        console.error('Ocurrio un error en post.controllers.js, "handleLikePost()"', { error: error.message, status: error.status });
        return res.status(500).json({ error: error.message, status: error.status });
    }
}



export const getLikes = async (req, res) => {
    try {
        const { idPost } = req.params;
        const foundLikes = await Post.findOne({ _id: idPost }).populate({
            path: "likes.idUser",
            select: "_id thumbnail username"
        });

        res.status(200).json({ likes: foundLikes.likes, status: 200, message: "Likes founded!" });
    } catch (error) {
        console.error('Ocurrio un error en post.controllers.js, "getLikes()"', { error: error.message, status: error.status });
        return res.status(500).json({ error: error.message, status: error.status });
    }
}

export const getViews = async (req, res) => {
    try {
        const { idPost } = req.params;
        const foundViews = await Post.findOne({ _id: idPost }).populate("views", "_id thumbnail username");

        res.status(200).json({ views: foundViews.views, status: 200, message: "Views founded!" });
    } catch (error) {
        console.error('Ocurrio un error en post.controllers.js, "getViews()"', { error: error.message, status: error.status });
        return res.status(500).json({ error: error.message, status: error.status });
    }
}

export const deletePost = async (req, res) => {
    try {
        const { idPost } = req.params;
        const userAuth = req.userAuth;
        const idAuth = req.idUser;

        const getIdImage = (URL) => {
            const param = URL.split('/');
            const splitParam = param[param.length - 1].split('.');
            return splitParam[0];
        }

        try {
            const media = await Post.findByIdAndDelete(idPost, { projection: { media_url: 1, mediaType: 1 } });

            const { media_url, mediaType } = media;
            const public_id = getIdImage(media_url)

            if (mediaType === IMAGE) {
                await cloudinary.v2.uploader.destroy(`mediagram/posts/${idAuth}/${public_id}`, (err, result) => {
                    if (err) {
                        console.error('Ocurrio un error al eliminar imagen de Cloudinary. Error: ', err)
                    }
                });
            } else if (mediaType === VIDEO) {
                await cloudinary.v2.uploader.destroy(`mediagram/posts/${idAuth}/${public_id}`, { resource_type: "video" }, (err, result) => {
                    if (err) {
                        console.error('Ocurrio un error al eliminar video de Cloudinary. Error: ', err)
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

export const updateTagsInPost = async (req, res) => {
    try {
        const { tags } = req.body;
        const { idPost } = req.params;

        await Post.findByIdAndUpdate(
            idPost,
            {
                tags: tags,
                shareInExplore: true
            },
            { new: true }
        )

        res.status(200).json({ message: 'Se actualizo correctamente la lista de tags.', status: 200 });

    } catch (error) {
        console.error('Ocurrio un error en post.controllers.js, "updateTagsInPost()"', { error: error.message, status: error.status });
        res.status(error.status).json({ error: error.message, status: error.status })
    }
}


export const visiblePosts = async (req, res) => {
    try {
        const { nameTag } = req.query;
        const tagsFound = req.tagsFound;
        const postsFound = req.postsFound;

        if (!tagsFound.length || !postsFound.length) return res.status(404).json({ message: `No se encontraron posts con el tag: '${nameTag}'.`, status: 404, post: [] })

        res.status(200).json({ message: `Se encontraron posts con el tag: '${nameTag}'`, post: postsFound });
    } catch (error) {
        console.error('Ocurrio un error en post.controllers.js, "visiblePosts()"', { error: error.message, status: error.status });
        return res.status(500).json({ error: error.message, status: error.status });
    }
}

export const getTrendPosts = async (req, res) => {
    try {
        const foundPosts = await Post
        .find({ shareInExplore: true })
        .sort({ counterViews: -1 })
        .limit(4)
        .select("_id thumbnail counterLikes counterViews counterComments anoanymViews postBy mediaType textContent tags")
        .populate({
            path: "postBy",
            select:"_id username thumbnail isPrivate"
        });
        
        if (!foundPosts.length) return res.status(404).json({ message: "No se encontraron posts!", trendPosts: [], status: 404 });

        res.status(200).json({ trendPosts: foundPosts, status: 200, message: "Se encontraron trend Posts!" })
    } catch (error) {
        console.error('Ocurrio un error en getTrendPosts(). post.controllers.js', error.message);
        res.status(error.status || 500).json({ error: error.message, status: error.status || 500 })
    }
}

export const test_getPost = async (req, res) => {
    try {
        const userAuth = req.userAuth;

        const test_query = await Post
        .find({
            postBy: {$in: userAuth.followings}, 
            typePost: {$ne: "EXCLUSIVEPOST"}
        })
        .populate({
            path: "postBy",
            select: "_id username thumbnail"
        })
        .populate({
            path: "comments",
            populate: {
                path: "commentBy",
                select: "_id thumbnail username"
            }
        })
        .populate({
            path: "referTo",
            select: "_id username thumbnail"
        });


        res.status(200).json(test_query)
    } catch (error) {
        console.error('Error en test_getPost. Error: ', error)
    }
}