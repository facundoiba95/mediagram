import cloudinary from 'cloudinary';
import fs from 'fs-extra';
import Post from '../models/Post.js';
import User from '../models/User.js';
import mongoose from 'mongoose';
import { config } from 'dotenv';
import generateThumbnail from '../libs/generateThumbnail.js';
import addPostToUser from '../libs/addPostToUser.js';
import isPrivateProfile from '../libs/isPrivateProfile.js';
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

        return res.status(200).json({message: 'El post se creó exitosamente!', status: 200 });
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
        if(!foundPosts.length) return res.status(404).json({ error: 'No se encontraron posts!', status:404 });
        return res.status(200).json({ message: 'Se encontraron estos posts!', post: foundPosts, status:200 });

    } catch (error) {
        console.error('Ocurrio un error en post.controllers.js, "getPosts()"',{error: error.message, status: error.status});
        return res.status(500).json({error: error.message, status: error.status});
    }
}