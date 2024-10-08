import User from "../models/User.js";
import addFollower from "../libs/Users/addFollower.js";
import deleteFollowUpRequest from "../libs/Users/deleteFollowUpRequest.js";
import fs from 'fs-extra';
import cloudinary from 'cloudinary';
import mongoose from "mongoose";
import Post from "../models/Post.js";
import { originalImage_path } from "../config/baseUrl.js";
import { acceptFollow_message } from "../libs/messages.js";
import modifyNotification from "../libs/Notifications/modifyNotification.js";
import deleteNotification from "../libs/Notifications/deleteNotification.js";

export const ACCEPT_ID = '5cc07723-451c-418f-b90a-e6b469f1f2b1';
export const REJECT_ID = '50d11393-dc3f-4ac4-89a6-143febd2e131';

export const searchUser = async (req, res) => {
    try {
        const { username } = req.params;

        const foundUser = await User.find({
            $or: [
                { username: { $eq: username.trim() } }, { username: { $regex: username.trim() } }
            ]
        }).select("_id username thumbnail");
        
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
        const { username, _id } = req.body;

        const foundUserFollowing = req.foundUserFollowing;
        const foundUserFollower = req.foundUserFollower;
        const foundFollowUpRequest = foundUserFollower.followUpRequest.filter(request => request.sentBy.find(usr => usr.equals(foundUserFollowing._id)));

        switch (foundFollowUpRequest[0].status) {
            case 'REJECTED':
                return res.status(403).json({ message: `Debes enviar una solicitud de seguimiento a "${username}"`, status: 403 })

            case 'ACCEPT':
                console.log(`Sigues al usuario "${username}"`);
        }

        foundUserFollowing.followings.unshift(new mongoose.Types.ObjectId(_id));
        foundUserFollower.followers.unshift(new mongoose.Types.ObjectId(foundUserFollowing._id));

        await foundUserFollowing.save();
        await foundUserFollower.save();

        return res.status(200).json({ message: `Sigues a ${username}!`, status: 200 });
    } catch (error) {
        console.error("Ocurrio un error en followUser(). user.controllers.js. Error: ",error);
        return res.status(500).json({ error: error.message, status: 500 });
    }
}

export const unfollowUser = async (req, res) => {
    try {
        const { username } = req.body;

        const userAuth = req.userAuth;
        const idAuth = req.idUser;
        const {idFollowUpRequest} = req.body;
        const foundUserFollower = await User.findOne({ username });

        const findIndexFollowUpRequest = foundUserFollower.followUpRequest.findIndex(request => request._id.equals(idFollowUpRequest));

        if (findIndexFollowUpRequest !== -1) {
            // borrar seguidor en usuario autenticado
            userAuth.followings = userAuth.followings.filter(idUsr => !idUsr.equals(foundUserFollower._id));

            // borrar seguidor en usuario recibido
            foundUserFollower.followers = foundUserFollower.followers.filter(usr => !usr.equals(idAuth));
            foundUserFollower.closeList = foundUserFollower.closeList.filter(usr => !usr.equals(idAuth))

            foundUserFollower.followUpRequest.splice(findIndexFollowUpRequest, 1);
            
            await deleteNotification({idAuth: userAuth._id, userID: foundUserFollower._id, idNotification: idFollowUpRequest});
            
            await userAuth.save();
            await foundUserFollower.save();
            return res.status(200).json({ message: `Dejaste de seguir a ${foundUserFollower.username}!`, status: 200, });
        } else {
            return res.status(404).json({ message: 'FollowUpRequest not found!', status: 404 });
        }

    } catch (error) {
        console.error(`Ocurrio un error al dejar de seguir al usuario "${req.body.username}". Error: `,error);
        return res.status(error.status).json({ error: error.message, status: error.status });
    }
}

export const handleIsFollowing = async (req, res) => {
    try {
        const { _id } = req.params;
        const userAuth = req.userAuth;
        const isFollowingsUsers = userAuth.followings.some(usr => usr.equals(_id));
        
        if(_id.equals(userAuth._id)) return res.status(200).json({ message: `Usuario autenticado`, isFollowing: true, status: 200 });
        
        if (isFollowingsUsers) return res.status(200).json({ message: `Eres seguidor!`, isFollowing: isFollowingsUsers, status: 200 });
        return res.status(403).json({ message: `No eres seguidor."`, isFollowing: isFollowingsUsers, status: 403 });
    } catch (error) {
        console.error("Ocurrio un error en handleIsFollowing() user.controllers.js Error: ",error.message);
        return res.status(error.status).json({ error: error.message, status: error.status });
    }
}

export const handleFollowUpRequest = async (req, res) => {
    try {
        const { idFollowUpRequest, followUpRequestResult } = req.body;
        const userAuth = req.userAuth;
        const userFollower = req.foundUserFollower;
        const foundFollowUpRequest = userAuth.followUpRequest.find(request => request._id.equals(idFollowUpRequest));

        
        if (followUpRequestResult === ACCEPT_ID) {                               
            await addFollower({_id: userFollower._id, userAuth, userFollower, foundFollowUpRequest });
            const messageNotif = acceptFollow_message(userFollower);
            await modifyNotification({body: { "content.message": messageNotif, "content.status": "ACCEPT" }, idNotification: idFollowUpRequest});

            return res.status(200).json({ message: `Tu y "${userFollower.username}" se siguen!`, status: 200 });
        } else if (followUpRequestResult === REJECT_ID) {                                
            await deleteNotification({idAuth: userAuth._id, userID: userAuth._id, idNotification: idFollowUpRequest})
            await deleteFollowUpRequest(userAuth, idFollowUpRequest, foundFollowUpRequest);
            
            return res.status(200).json({ message: `Ha sido rechazada la solicitud de seguimiento del usuario: "${userFollower.username}"!`, status: 200 });
        } else {
            return res.status(400).json({ message: `"followUpRequestResult" is not a Boolean!`, status: 400 });
        }

    } catch (error) {
        console.error("Ocurrio un error al responder a la solicitud de seguimiento. En handleFollowUpRequest.js user.controllers.js. Error: ", error.message);
        return res.status(error.status).json({ error: error.message, status: error.status });
    }
}

export const refreshUser = async (req, res) => {
    try {
        const foundUser = req.userSelected;
        res.status(200).json({ message: 'refresh user!', user: foundUser, status: 200 });
    } catch (error) {
        console.error('Ocurrio un error en refreshUser(). user.controllers.js', error.message);
        res.status(error.status).json({ error: error.message, status: error.status })
    }
}

export const changeImgProfile = async (req, res) => {
    try {
        const userAuth = req.userAuth;
        const idAuth = req.idUser;
        const result_image = await cloudinary.v2.uploader.upload(originalImage_path, {
            folder: `mediagram/users/${idAuth}`,
            eager: [
                {
                    format: 'avif',
                    width: 400,
                    height: 400,
                    crop: 'thumb',
                    gravity: "center"
                }
            ]
        });

        const result_thumbnail_image = result_image.eager[0].secure_url;

        userAuth.imgProfile = `${result_image.secure_url}`;// guarda la ruta de archivo original
        userAuth.thumbnail = `${result_thumbnail_image}`;// guarda la ruta de la miniatura

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

        const found_EXCLUSIVEPOST = await Post.find({ _id: { $in: closeList.flatMap(user => user.posts) }, typePost: 'EXCLUSIVEPOST' }).select('_id postBy views media_url mediaType createdAt');

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

export const getTrendUsers = async (req, res) => {
    try {
        const foundUsers = await User.find().sort({ counterViews: -1 }).limit(6).select("_id thumbnail username counterViews");

        if (!foundUsers.length) return res.status(404).json({ trendUsers: [], status: 404, message: "No se encontraron usuarios en tendencia." });

        res.status(200).json({ trendUsers: foundUsers, status: 200, message: "Se encontraros usuarios en tendencia." })
    } catch (error) {
        console.error('Ocurrio un error en getTrendUsers(). user.controllers.js', error.message);
        res.status(error.status || 500).json({ error: error.message, status: error.status || 500 })
    }
}

export const getFollowers = async (req,res) => {
    try {
        const userSelected = req.userSelected;
        const idsFollowers = userSelected[0].followers;
        const privateAccount = req.privateAccount;
        
        if(privateAccount) return res.status(403).json({message: "Esta cuenta es privada! No tienes acceso a su informacion.", followers: [], status: 403});

        const foundFollowers = await User.find({_id: {$in: idsFollowers}}).select("username thumbnail _id");
    
        if(!foundFollowers.length) return res.status(404).json({message: "Not found followers!", followers: [], status: 404});

        res.status(200).json({message: "Followers founded!", followers: foundFollowers, status: 200});
    } catch (error) {
        console.error('Ocurrio un error en getFollowers(). user.controllers.js', error.message);
        res.status(error.status || 500).json({ error: error.message, status: error.status || 500 })
    }
}

export const getFollowings = async (req,res) => {
    try {
        const userSelected = req.userSelected;
        const idsFollowings = userSelected[0].followings;
        const privateAccount = req.privateAccount;
        
        if(privateAccount) return res.status(403).json({message: "Esta cuenta es privada! No tienes acceso a su informacion.", followers: [], status: 403});

        if(!idsFollowings.length) return res.status(404).json({message: "Not found followings!", followings: [], status: 404});
        
        const foundFollowings = await User.find({_id: {$in: idsFollowings}}).select("username thumbnail _id");
        
        res.status(200).json({message: "Followings founded!", followings: foundFollowings, status: 200});
    } catch (error) {
        console.error('Ocurrio un error en getFollowings(). user.controllers.js', error.message);
        res.status(error.status || 500).json({ error: error.message, status: error.status || 500 })
    }
}

export const addNewLocation = async (req, res) => {
    try {
        const idAuth = req.idUser;
        const { location } = req.body;

        const updateLocation_User = await User.findByIdAndUpdate(
            idAuth,
            { location },
            { new: true }
        )

        res.status(200).json({ message: `Se actualizo la localidad a "${location}"`, status: 200, user: updateLocation_User });

    } catch (error) {
        console.error('Ocurrio un error en addNewLocation(). user.controllers.js', error);
        res.status(error.status || 500).json({ error: error.message, status: error.status || 500 })
    }
}

export const updateProfession = async (req,res) => {
    try {
        const idAuth = req.idUser;
        const {idProfession} = req.params;

        await User.findByIdAndUpdate(
            idAuth,
            { profession: idProfession },
            { new: true }
        )

        res.status(200).json({ message: `Se actualizo la profesion.ID Profession: ${idProfession}"`, status: 200 });
    } catch (error) {
        console.error('Ocurrio un error en addNewLocation(). user.controllers.js', error);
        res.status(error.status || 500).json({ error: error.message, status: error.status || 500 })
    }
}