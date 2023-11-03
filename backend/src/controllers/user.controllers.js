import User from "../models/User.js";
import isPrivateProfile from '../libs/isPrivateProfile.js'
import addFollower from "../libs/Users/addFollower.js";
import deleteFollowUpRequest from "../libs/Users/deleteFollowUpRequest.js";
import generateThumbnail from "../libs/generateThumbnail.js";
import fs from 'fs-extra';
import cloudinary from 'cloudinary';
import mongoose from "mongoose";


export const searchUser = async ( req,res ) => {
    try {
        const { valueUser } = req.params;

        const foundUser = await User.find({
            $or: [
                {username: {$eq: valueUser.trim()}},{username: {$regex: valueUser.trim()}}
            ]
        },{
            password: 0,
            email: 0,
            posts:0,
            likesInProfile:0,
            start: 0,
            greets:0,
            followings:0,
            followers:0,
            histories:0,
            viewsInProfile:0,
            followUpRequest:0,
            createdAt:0,
            updatedAt:0
        })
        
        if(!foundUser.length) return res.status(404).json({message: 'No se encontraron usuarios!', status: 404, userFound:[]})
        return res.status(200).json({message:'users searched!', status:200, userFound: foundUser});
    } catch (error) {
        console.error('Ocurrio un error en (). user.controllers.js', error.message);
        res.status(500).json({error: error.message, status:500});
    }
}

export const selectUser = async ( req,res ) => {
    try {
        const { username  } = req.body;

        const foundUser = await isPrivateProfile(username, req.idUser);
        const foundUserAuth = await User.find({ _id: req.idUser},{password:0 });

        if(foundUser[0].username === foundUserAuth[0].username && foundUserAuth[0]._id == req.idUser){
            return res.status(200).json({ message:'user auth selected!', status:200, userFiltered: foundUserAuth, isFollowing: true });
        }  

        return res.status(200).json({ message:'users searched selected!', status:200, userFiltered: foundUser });

    } catch (error) {
        console.error('Ocurrio un error en selectUser(). user.controllers.js', error.message);
        res.status(500).json({ error: error.message, status:500  });
    }
}

export const followUser = async ( req,res ) => {
    try {
        const { imgProfile, username, _id } = req.body;

        const foundUserFollowing = req.foundUserFollowing;
        const foundUserFollower =  req.foundUserFollower;
        const foundFollowUpRequest = foundUserFollower.followUpRequest.filter(request => request.sentBy.find(usr => usr.username === foundUserFollowing.username));

        switch (foundFollowUpRequest[0].status) {
            case 'REJECTED':
                return res.status(401).json({ message: `Debes enviar una solicitud de seguimiento a "${username}"`, status:401 })

            case 'ACCEPT':
                console.log(`Sigues al usuario "${username}"`);
        }

        const addUserFollowing = {
            imgProfile,
            username,
            _id: new mongoose.Types.ObjectId(_id)
        }   

        const addUserFollower = { 
            imgProfile: foundUserFollowing.imgProfile,
            username: foundUserFollowing.username, 
            _id: new mongoose.Types.ObjectId(foundUserFollowing._id )
        }

        foundUserFollowing.followings.unshift(addUserFollowing);
        foundUserFollower.followers.unshift(addUserFollower);

        await foundUserFollowing.save();
        await foundUserFollower.save();

        return res.status(200).json({ message: `Sigues a ${username}!`, status:200 });
    } catch (error) {
        console.error(error.message);
        return res.status(error.status).json({error: error.message, status: error.status   });
    }
}

export const unfollowUser = async ( req,res ) => {
    try {
        const { username, idFollowUpRequest } = req.body;

        const foundUserFollowing = await User.findOne({_id: req.idUser });
        const foundUserFollower = await User.findOne({username});
        const foundFollowUpRequest = foundUserFollower.followUpRequest.find(request => request._id.toString() === idFollowUpRequest.toString());

        foundUserFollowing.followings =  foundUserFollowing.followings.filter(usr => usr.username !== username);
        foundUserFollower.followers = foundUserFollower.followers.filter(usr => usr._id.toString() !== req.idUser);
        foundFollowUpRequest.status = 'REJECTED'
        
        await foundUserFollowing.save();
        await foundUserFollower.save();

        return res.status(200).json({ message: `Dejaste de seguir a ${foundUserFollower.username}!`, status:200 });
    } catch (error) {
        console.error(error.message);
        return res.status(error.status).json({error: error.message, status: error.status  });
    }
}

export const handleIsFollowing = async ( req,res ) => {
    try {
        const { username } = req.body;
        const foundUserRecived = await User.findOne({ username });
        const userAuth = await User.findOne({_id: req.idUser});
        const isFollowingsUsers = foundUserRecived.followers.some(usr => usr.username === userAuth.username);
        
        if(isFollowingsUsers) return res.status(200).json({ message: 'Is followers users!', isFollowing: isFollowingsUsers, status: 200  });
        return res.status(401).json({ message: `You are a not follower to user "${ username }"`, isFollowing:  isFollowingsUsers, status: 401 });
    } catch (error) {
        console.error(error.message);
        return res.status(error.status).json({error: error.message, status: error.status  });
    }
}

export const handleFollowUpRequest = async ( req,res ) => {
    try {
        const { idFollowUpRequest, followUpRequestResult, imgProfile,username, _id } = req.body;
        const userAuth = req.userAuth;
        const userFollower = req.foundUserFollower;
        const foundFollowUpRequest = userAuth.followUpRequest.find(request => request._id.toString() === idFollowUpRequest.toString());

        if( followUpRequestResult === '5cc07723-451c-418f-b90a-e6b469f1f2b1'){                                // este id significa que SE ACEPTA la solicitud de seguimiento
            await addFollower({imgProfile, username, _id, userAuth, userFollower, foundFollowUpRequest});
            return res.status(200).json({message: `You and "${userFollower.username}" are a followers!`, status: 200 });
        } else if( followUpRequestResult === '50d11393-dc3f-4ac4-89a6-143febd2e131' ) {                       // este id significa que NO SE ACEPTA la solicitud de seguimiento
            await deleteFollowUpRequest( userAuth, idFollowUpRequest, foundFollowUpRequest );
            return res.status(200).json({message: `Has been rejected follow up request of "${userFollower.username}"!`, status: 200 });
        } else {
            return res.status(400).json({message: `"followUpRequestResult" is not a Boolean!`, status: 400 });
        }

    } catch (error) {
        console.error(error.message);
        return res.status(error.status).json({error: error.message, status: error.status });
    }
}

export const verifyUser = async ( req,res ) => {
    try {
        const { username } = req.body;
        const foundUser = await isPrivateProfile(username, req.idUser);
        res.status(200).json({ message: 'refresh user!', user: foundUser, status: 200 }); 
    } catch (error) {
        console.error('Ocurrio un error en verifyUser(). user.controllers.js', error.message);
        res.status(error.status).json({error: error.message, status: error.status })
    }
}

export const changeImgProfile = async ( req,res ) => {
    try {
        const userAuth = req.userAuth;
        const result = await cloudinary.v2.uploader.upload(req.file.path); // subir archivo original
        userAuth.imgProfile = `${result.secure_url}`;// guarda la ruta de archivo original

        await generateThumbnail(req,res);
        const thumbnailPath = `${req.file.path}`; // Ruta para la miniatura
        const resultThumbnail = await cloudinary.v2.uploader.upload(`${thumbnailPath}-thumbnail.jpeg`); // subir archivo miniatura
        userAuth.thumbnail = `${resultThumbnail.secure_url}`;// guarda la ruta de la miniatura


        await fs.unlink(`${thumbnailPath}-thumbnail.jpeg`)   // elimina archivo local de miniatura  
        await fs.unlink(req.file.path); // elimina archivo local original
        await userAuth.save();

        return res.status(200).json({ message: 'Image profile updated!', status:200  });
    } catch (error) {
        console.error('Ocurrio un error en changeImgProfile(). user.controllers.js', error.message);
        res.status(error.status || 500).json({error: error.message, status: error.status || 500 })
    }
}