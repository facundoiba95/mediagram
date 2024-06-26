import cloudinary from 'cloudinary';
import Post from '../models/Post.js';
import mongoose from 'mongoose';
import { config } from 'dotenv';
import addPostToUser from '../libs/Posts/addPostToUser.js';
import addCountersInPost from '../libs/Posts/addCountersInPost.js';
import addCommentNotification from '../libs/Notifications/Posts/addCommentNotification.js';
import addLikePostNotification from '../libs/Notifications/Posts/addLikePostNotification.js';
import handleRestrictPosts from '../libs/Posts/handleRestrictPosts.js';
import referToNotification from '../libs/Notifications/Posts/referToNotification.js';
import { originalImage_path, originalVideo_path } from '../config/baseUrl.js';
import deleteFiles from '../libs/deleteFiles.js';
import { IMAGE, VIDEO } from '../libs/fileExtensions.js';
import { uploadImage } from '../libs/Posts/uploadImage.js';
import { uploadVideo } from '../libs/Posts/uploadVideo.js';
config();

export const EXCLUIVE_POST = "EXCLUSIVEPOST";

export const createPost = async (req, res) => {
    try {
        const { location, description, typePost } = req.body;
        const referTo = JSON.parse(req.body.referTo); // [Object]
        const tags = JSON.parse(req.body.tags); // [Object]
        const shareInExplore = req.body.shareInExplore === 'true'; // Boolean
        const postBy = new mongoose.Types.ObjectId(req.body.postBy); // ObjectId
        const userAuth = req.userAuth; // Object
        const mediaType = req.mediaType;
        const idAuth = req.idUser;
        let file_paths = [];


        const newPost = new Post({
            typePost,
            postBy,
            referTo,
            description,
            location
        });

        if (!userAuth.isPrivate && shareInExplore) {
            if (!tags.length) return res.status(404).json({ message: 'Debes incluir tags en tu publicación.', status: 404 });
            const idsTags = tags.map(tag => new mongoose.Types.ObjectId(tag._id));
            newPost.tags = idsTags;
            newPost.shareInExplore = shareInExplore;
        }

        if (mediaType === IMAGE) {
            const image = await uploadImage(idAuth);
            newPost.media_url = `${image.result_image.secure_url}`;
            newPost.thumbnail = `${image.result_thumbnail_image}`;
            newPost.mediaType = IMAGE;
            file_paths.push(originalImage_path);
        } else if (mediaType === VIDEO) {
            const video = await uploadVideo(idAuth);
            newPost.media_url = `${video.result_video.secure_url}`;
            newPost.thumbnail = `${video.result_thumbnail_video}`;
            newPost.mediaType = VIDEO;
            file_paths.push(originalVideo_path);
        }

        await deleteFiles(file_paths);
        file_paths = [];

        await newPost.save();
        await addPostToUser(postBy, newPost._id);
        await referToNotification(newPost.thumbnail, newPost._id, userAuth, referTo)

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

export const getPostByFollowings = async (req, res) => {
    try {
        const postByFollowings = req.postByFollowings;
        const exclude_ExclusivePosts = postByFollowings.filter(post => post.typePost !== EXCLUIVE_POST)

        return res.status(200).json({ post: exclude_ExclusivePosts, status: 200, message: 'Founded posts' })
    } catch (error) {
        console.error('Ocurrio un error en post.controllers.js, "getPostsByFollowings()"', { error: error.message, status: error.status });
        return res.status(500).json({ error: error.message, status: error.status });
    }
}

export const getPostsByCloseList = async (req, res) => {
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
        const foundPosts = await Post.find({ shareInExplore: true }).sort({ counterViews: -1 }).limit(4).select("_id thumbnail counterLikes counterViews anoanymViews postBy mediaType");
        if (!foundPosts.length) return res.status(404).json({ message: "No se encontraron posts!", trendPosts: [], status: 404 });

        res.status(200).json({ trendPosts: foundPosts, status: 200, message: "Se encontraron trend Posts!" })
    } catch (error) {
        console.error('Ocurrio un error en getTrendPosts(). post.controllers.js', error.message);
        res.status(error.status || 500).json({ error: error.message, status: error.status || 500 })
    }
}