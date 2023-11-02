import Jwt from 'jsonwebtoken';
import User from '../../models/User.js';
import Post from '../../models/Post.js';
import mongoose from 'mongoose';

export default async ( req,res,next ) => {
    try {
        const token = req.headers["x-access-token"];
        const idPost = new mongoose.Types.ObjectId(req.params.idPost);
        const foundPost = await Post.findById(idPost);

        if (!token || token == 'null'){
            await addUserAnonymus(foundPost);
            next();
        } else {
            try {
                await addUserVerifed(foundPost, token);
                next();
            } catch (error) {
                await addUserAnonymus(foundPost);
                next();
            }
        }
    } catch (error) {
        console.error('Ocurrio un error en middleware addViewInPost.js. Error: ', error);
        next(error);
    }
}

const addUserVerifed = async (foundPost,token) => {
    const verifyToken = Jwt.verify(token, process.env.JWT_SECRET);
    const foundUser = await User.findOne({_id: verifyToken.id});
    if(!foundUser) return await Promise.reject({ error: 'Estas intentando accedes con un token invalido!', status: 404 });
    
    
    const newViewer = {
        username: foundUser.username,
        thumbnail: foundUser.thumbnail,
        _id: foundUser._id
    };

        
    foundPost.views.unshift(newViewer);
    foundPost.counterViews = foundPost.views.length;
    await foundPost.save();
}

const addUserAnonymus = async (foundPost) => {
    foundPost.anonymViews = foundPost.anonymViews + 1;
    await foundPost.save();
}