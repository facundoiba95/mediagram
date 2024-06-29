import User from "../models/User.js";
import addFollower from "../libs/Users/addFollower.js";
import deleteFollowUpRequest from "../libs/Users/deleteFollowUpRequest.js";
import generateThumbnail from "../libs/generateThumbnail.js";
import fs from 'fs-extra';
import cloudinary from 'cloudinary';
import mongoose from "mongoose";
import followUpRequestNotification from "../libs/Notifications/Users/followUpRequest/followUpRequestNotification.js";
import Post from "../models/Post.js";
import {originalImage_path, thumbnailImage_path} from "../config/baseUrl.js";


export const searchUser = async (req, res) => {
    try {
        const { valueUser } = req.params;

        const foundUser = await User.find({
            $or: [
                { username: { $eq: valueUser.trim() } }, { username: { $regex: valueUser.trim() } }
            ]
        }, {
            password: 0,
            email: 0,
            posts: 0,
            likesInProfile: 0,
            start: 0,
            greets: 0,
            followings: 0,
            followers: 0,
            histories: 0,
            viewsInProfile: 0,
            followUpRequest: 0,
            closeList: 0,
            createdAt: 0,
            updatedAt: 0
        })

        if (!foundUser.length) return res.status(404).json({ message: 'No se encontraron usuarios!', status: 404, userFound: [] })
        return res.status(200).json({ message: 'Users founded!', status: 200, userFound: foundUser });
    } catch (error) {
        console.error('Ocurrio un error en (). user.controllers.js', error.message);
        res.status(500).json({ error: error.message, status: 500 });
    }
}

export const selectUser = async (req, res) => {
    try {
        const foundUser = req.userSelected;
        const foundUserAuth = [req.userAuth];
        const idAuth = req.idUser;
        const isUserAuth = foundUser[0]._id.equals(idAuth);

        if (isUserAuth) return res.status(200).json({ message: 'User auth selected!', status: 200, userSelected: foundUserAuth, isFollowing: true });

        return res.status(200).json({ message: 'User found!', status: 200, userSelected: foundUser });
    } catch (error) {
        console.error('Ocurrio un error en selectUser(). user.controllers.js', error.message);
        res.status(500).json({ error: error.message, status: 500 });
    }
}

export const followUser = async (req, res) => {
    try {
        const { imgProfile, username, _id } = req.body;

        const foundUserFollowing = req.foundUserFollowing;
        const foundUserFollower = req.foundUserFollower;
        const foundFollowUpRequest = foundUserFollower.followUpRequest.filter(request => request.sentBy.find(usr => usr.username === foundUserFollowing.username));

        switch (foundFollowUpRequest[0].status) {
            case 'REJECTED':
                return res.status(401).json({ message: `Debes enviar una solicitud de seguimiento a "${username}"`, status: 401 })

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
            _id: new mongoose.Types.ObjectId(foundUserFollowing._id)
        }

        foundUserFollowing.followings.unshift(addUserFollowing);
        foundUserFollower.followers.unshift(addUserFollower);

        await foundUserFollowing.save();
        await foundUserFollower.save();

        return res.status(200).json({ message: `Sigues a ${username}!`, status: 200 });
    } catch (error) {
        console.error(error.message);
        return res.status(error.status).json({ error: error.message, status: error.status });
    }
}

export const unfollowUser = async (req, res) => {
    try {
        const { username } = req.body;

        const userAuth = req.userAuth;
        const idAuth = req.idUser;
        const idFollowUpRequest = new mongoose.Types.ObjectId(req.body.idFollowUpRequest);
        const foundUserFollower = await User.findOne({ username });

        const findIndexFollowUpRequest = foundUserFollower.followUpRequest.findIndex(request => request._id.equals(idFollowUpRequest));

        if (findIndexFollowUpRequest !== -1) {
            // borrar seguidor en usuario autenticado
            userAuth.followings = userAuth.followings.filter(usr => usr.username !== username);

            // borrar seguidor en usuario recibido
            foundUserFollower.followers = foundUserFollower.followers.filter(usr => !usr._id.equals(idAuth));
            foundUserFollower.closeList = foundUserFollower.closeList.filter(usr => !usr.equals(idAuth))

            foundUserFollower.followUpRequest.splice(findIndexFollowUpRequest, 1);

            await followUpRequestNotification({ username }, userAuth, 'REJECTED');
            await userAuth.save();
            await foundUserFollower.save();
            return res.status(200).json({ message: `Dejaste de seguir a ${foundUserFollower.username}!`, status: 200, });
        } else {
            return res.status(404).json({ message: 'FollowUpRequest not found!', status: 404 });
        }

    } catch (error) {
        console.error(error.message);
        return res.status(error.status).json({ error: error.message, status: error.status });
    }
}

export const handleIsFollowing = async (req, res) => {
    try {
        const { username } = req.body;
        const userAuth = req.userAuth;
        const isFollowingsUsers = userAuth.followings.some(usr => usr.username === username);

        if (isFollowingsUsers) return res.status(200).json({ message: `Eres seguidor de ${username}!`, isFollowing: isFollowingsUsers, status: 200 });
        return res.status(401).json({ message: `No eres seguidor de "${username}"`, isFollowing: isFollowingsUsers, status: 401 });
    } catch (error) {
        console.error(error.message);
        return res.status(error.status).json({ error: error.message, status: error.status });
    }
}

export const handleFollowUpRequest = async (req, res) => {
    try {
        const { idFollowUpRequest, followUpRequestResult, imgProfile, username, _id } = req.body;
        const userAuth = req.userAuth;
        const userFollower = req.foundUserFollower;
        const foundFollowUpRequest = userAuth.followUpRequest.find(request => request._id.toString() === idFollowUpRequest.toString());

        if (followUpRequestResult === '5cc07723-451c-418f-b90a-e6b469f1f2b1') {                                // este id significa que SE ACEPTA la solicitud de seguimiento
            await addFollower({ imgProfile, username, _id, userAuth, userFollower, foundFollowUpRequest });
            await followUpRequestNotification(userAuth, { username }, 'ACCEPT');

            return res.status(200).json({ message: `Tu y "${userFollower.username}" se siguen!`, status: 200 });
        } else if (followUpRequestResult === '50d11393-dc3f-4ac4-89a6-143febd2e131') {                       // este id significa que NO SE ACEPTA la solicitud de seguimiento
            await followUpRequestNotification(userAuth, { username }, 'REJECTED');
            await deleteFollowUpRequest(userAuth, idFollowUpRequest, foundFollowUpRequest);

            return res.status(200).json({ message: `Ha sido rechazada la solicitud de seguimiento del usuario: "${userFollower.username}"!`, status: 200 });
        } else {
            return res.status(400).json({ message: `"followUpRequestResult" is not a Boolean!`, status: 400 });
        }

    } catch (error) {
        console.error(error.message);
        return res.status(error.status).json({ error: error.message, status: error.status });
    }
}

export const verifyUser = async (req, res) => {
    try {
        const foundUser = req.userSelected;
        res.status(200).json({ message: 'refresh user!', user: foundUser, status: 200 });
    } catch (error) {
        console.error('Ocurrio un error en verifyUser(). user.controllers.js', error.message);
        res.status(error.status).json({ error: error.message, status: error.status })
    }
}

export const changeImgProfile = async (req, res) => {
    try {
        const userAuth = req.userAuth;
        const result = await cloudinary.v2.uploader.upload(originalImage_path, {
            folder: 'mediagram/users'
        }); // subir archivo original
        userAuth.imgProfile = `${result.secure_url}`;// guarda la ruta de archivo original

        await generateThumbnail();
        const resultThumbnail = await cloudinary.v2.uploader.upload(thumbnailImage_path, {
            folder: 'mediagram/users'
        }); // subir archivo miniatura
        userAuth.thumbnail = `${resultThumbnail.secure_url}`;// guarda la ruta de la miniatura


        await fs.unlink(thumbnailImage_path)   // elimina archivo local de miniatura  
        await fs.unlink(originalImage_path); // elimina archivo local original
        await userAuth.save();

        return res.status(200).json({ message: 'Image profile updated!', status: 200 });
    } catch (error) {
        console.error('Ocurrio un error en changeImgProfile(). user.controllers.js', error.message);
        res.status(error.status || 500).json({ error: error.message, status: error.status || 500 })
    }
}

export const getCloseList = async (req, res) => {
    try {
        const idAuth = req.idUser;

        let closeList = await User.find({ closeList: idAuth }).select('_id username thumbnail posts');

        const found_EXCLUSIVEPOST = await Post.find({ _id: { $in: closeList.flatMap(user => user.posts) }, typePost: 'EXCLUSIVEPOST' }).select('_id postBy views imgPost');

        closeList = closeList.filter(usr => {
            if (!found_EXCLUSIVEPOST.length) {
                usr.posts = [];
                return usr;
            }

            usr.posts = found_EXCLUSIVEPOST.filter(post => post.postBy.equals(usr._id));

            return usr;
        })

        res.status(200).json({ closeList, status: 200 });
    } catch (error) {
        console.error('Ocurrio un error en getCloseList(). user.controllers.js', error.message);
        res.status(error.status || 500).json({ error: error.message, status: error.status || 500 })
    }
}

export const getTrendUsers = async (req,res) => {
    try {
        const foundUsers = await User.find().sort({counterViews: -1 }).limit(6).select("_id thumbnail username counterViews");
        
        if(!foundUsers.length) return res.status(404).json({trendUsers: [], status: 404, message: "No se encontraron usuarios en tendencia."});

        res.status(200).json({trendUsers: foundUsers, status: 200, message: "Se encontraros usuarios en tendencia."})
    } catch (error) {
        console.error('Ocurrio un error en getTrendUsers(). user.controllers.js', error.message);
        res.status(error.status || 500).json({ error: error.message, status: error.status || 500 })
    }
}