import cloudinary from 'cloudinary';
import fs from 'fs-extra';
import Post from '../models/Post.js';
import User from '../models/User.js';
import mongoose, { mongo } from 'mongoose';
import { config } from 'dotenv';
import generateThumbnail from '../libs/generateThumbnail.js';
import addPostToUser from '../libs/addPostToUser.js';
import isPrivateProfile from '../libs/isPrivateProfile.js';
import addCountersInPost from '../libs/Posts/addCountersInPost.js';
import addCommentNotification from '../libs/Notifications/Posts/addCommentNotification.js';
import addLikePostNotification from '../libs/Notifications/Posts/addLikePostNotification.js';
config();

export const createPost = async ( req,res ) => {
    try {
        const { location, description, typePost } = req.body;
        const referTo = JSON.parse(req.body.referTo);
        const postBy = new mongoose.Types.ObjectId(req.body.postBy);
        
        const newPost = new Post({
            typePost,
            postBy,
            referTo,
            description,
            location
        });

        const result = await cloudinary.v2.uploader.upload(req.file.path); // subir archivo original
        newPost.imgPost = `${result.secure_url}`;// guarda la ruta de archivo original

        await generateThumbnail(req,res);
        const thumbnailPath = `${req.file.path}`; // Ruta para la miniatura
        const resultThumbnail = await cloudinary.v2.uploader.upload(`${thumbnailPath}-thumbnail.jpeg`); // subir archivo miniatura
        newPost.thumbnail = `${resultThumbnail.secure_url}`;// guarda la ruta de la miniatura


        await fs.unlink(`${thumbnailPath}-thumbnail.jpeg`)   // elimina archivo local de miniatura  
        await fs.unlink(req.file.path); // elimina archivo local original
        await newPost.save();
        await addPostToUser(postBy, newPost._id);

        return res.status(200).json({message: 'El post se creó exitosamente!', post: [],status: 200 });
    } catch (error) {
        console.error('Ocurrio un error en post.controllers.js, "createPost()"',{error: error.message, status: error.status});
        return res.status(500).json({ error: error.message, status: error.status });
    }
}

export const getPosts = async ( req,res ) => {
    try {
        const { username } = req.body;

        const foundUser = await isPrivateProfile(username, req.idUser);
        const userAuth = await User.find({_id: req.idUser});
        const postDatabase = await Post.find();
        const isUserAuthPost = userAuth[0].username === foundUser[0].username; 
        const dataPostToSend = isUserAuthPost ? userAuth[0] : foundUser[0]; // si es usuario auth, envia toda la data, sino lo maneja foundUser;

        const foundPosts = postDatabase.filter(content => dataPostToSend.posts.includes(content._id));
        if(!foundPosts.length) return res.status(404).json({ error: 'No se encontraron posts!', status:404, post: [] });
        return res.status(200).json({ message: 'Se encontraron estos posts!', post: foundPosts, status:200 });

    } catch (error) {
        console.error('Ocurrio un error en post.controllers.js, "getPosts()"',{error: error.message, status: error.status});
        return res.status(500).json({error: error.message, status: error.status});
    }
}

export const getPostByID = async ( req,res ) => {
    try {
        const foundedPost = req.associatePostAndUser;
        console.log(req.isLogged);
        console.log(req.error);
        return res.status(200).json({ message: 'Founded post!', post: foundedPost, status:200 }); 
    } catch (error) {
        console.error('Ocurrio un error en post.controllers.js, "getPostByID()"',{error: error.message, status: error.status});
        return res.status(500).json({error: error.message, status: error.status});
    }
}

export const addComment = async ( req,res ) => {
    try {
        const { content, _idPost, postedBy } = req.body;
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
               {  $push: { comments: newComment }  },
               { new: true }
            )

        addCommentInPost.counterComments = addCommentInPost.comments.length;
        addCommentInPost.counterLikes = addCommentInPost.likes.length;
        addCommentInPost.counterViews = addCommentInPost.views.length;
        
        if(username !== postedBy.username){
            await addCommentNotification( postedBy, addCommentInPost.thumbnail, addCommentInPost._id, newComment._id ,req.userAuth );
        };
        const addPostedBy = [addCommentInPost._doc].map(item => {
            return {
                ... item,
                postedBy
            }
        })
        
        await addCommentInPost.save();
        return res.status(200).json({ post: addPostedBy, message: 'Added comment!', status:200 });
    } catch (error) {
        console.error('Ocurrio un error en post.controllers.js, "addComment()"',{error: error.message, status: error.status});
        return res.status(500).json({error: error.message, status: error.status});
    }
}

export const handleLikeToPost = async ( req,res ) => {
    try {
        const { thumbnail, username, _id, idPost, postedBy } = req.body;
        const userAuth = req.userAuth;
    
        const newLike = {
            idLike: new mongoose.Types.ObjectId(),
            username,
            thumbnail: thumbnail ? thumbnail : '',
            _id
        }

        const addLikeToPost = await Post.findByIdAndUpdate(
            idPost,
            { $push: { likes: newLike } },
            { new: true }
        )

        addLikeToPost.likedPost = true;

        await addCountersInPost(addLikeToPost)
        await addLikePostNotification(postedBy, addLikeToPost.thumbnail, idPost, userAuth)  
        const addPostedBy = [ addLikeToPost._doc ].map(item => {
            return {
                ... item,
                postedBy
            }
        })

        return res.status(200).json({ post: addPostedBy ,message: 'Added like!', status:200 });
    } catch (error) {
        console.error('Ocurrio un error en post.controllers.js, "addLikeComment()"',{error: error.message, status: error.status});
        return res.status(500).json({error: error.message, status: error.status});
    }
}