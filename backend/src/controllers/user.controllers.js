import User from "../models/User.js";
import isPrivateProfile from '../libs/isPrivateProfile.js'


export const searchUser = async ( req,res ) => {
    try {
        const { valueUser } = req.params;

        if(valueUser.trim().length < 3) return;

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

        if(foundUser[0].username === foundUserAuth[0].username && foundUserAuth[0]._id == req.idUser)  return res.status(200).json({ message:'user auth selected!', status:200, userFiltered: foundUserAuth, isFollowing: true });

        return res.status(200).json({ message:'users searched selected!', status:200, userFiltered: foundUser });
    } catch (error) {
        console.error('Ocurrio un error en selectUser(). user.controllers.js', error.message);
        res.status(500).json({ error: error.message, status:500 });
    }
}


export const followUser = async ( req,res ) => {
    try {
        const { imgProfile, username, _id} = req.body;

        const foundUserFollowing = req.foundUserFollowing;
        const foundUserFollower = req.foundUserFollower;
       
        const addUserFollowing = {
            imgProfile,
            username,
            _id
        }   

        const addUserFollower = { 
            imgProfile: foundUserFollowing.imgProfile,
            username: foundUserFollowing.username, 
            _id: foundUserFollowing._id 
        }

        foundUserFollowing.followings.unshift(addUserFollowing);
        foundUserFollower.followers.unshift(addUserFollower);

        await foundUserFollowing.save();
        await foundUserFollower.save();

        return res.status(200).json({ message: `Sigues a ${username}!`, status:200});
    } catch (error) {
        console.error(error.message);
        return res.status(error.status).json({error: error.message, status: error.status });
    }
}

export const unfollowUser = async ( req,res ) => {
    try {
        const { username } = req.body;

        const foundUserFollowing = await User.findOne({_id: req.idUser });
        const foundUserFollower = await User.findOne({username});
       
        foundUserFollowing.followings =  foundUserFollowing.followings.filter(usr => usr.username !== username);
        foundUserFollower.followers = foundUserFollower.followers.filter(usr => usr._id.toString() !== req.idUser);
        
        await foundUserFollowing.save();
        await foundUserFollower.save();

        return res.status(200).json({ message: `Dejaste de seguir a ${foundUserFollower.username}!`, status:200});
    } catch (error) {
        console.error(error.message);
        return res.status(error.status).json({error: error.message, status: error.status });
    }
}

export const handleIsFollowing = async ( req,res ) => {
    try {
        const { username } = req.body;
        const foundUserRecived = await User.findOne({ username });
        const userAuth = await User.findOne({_id: req.idUser});
        const isFollowingsUsers = foundUserRecived.followers.some(usr => usr.username === userAuth.username);
        
        if(isFollowingsUsers) return res.status(200).json({ message: 'Is followers users!', isFollowing: isFollowingsUsers, status: 200 });
        return res.status(401).json({ message: `You´re not follower to user ${ username }`, isFollowing:  isFollowingsUsers, status: 401});
    } catch (error) {
        console.error(error.message);
        return res.status(error.status).json({error: error.message, status: error.status });
    }
}


export const verifyUser = async ( req,res ) => {
    try {
        const { username } = req.body;
        const foundUser = await isPrivateProfile(username, req.idUser);
        res.status(200).json({ message: 'refresh user!', user: foundUser, status: 200}); 
    } catch (error) {
        console.error('Ocurrio un error en verifyUser(). user.controllers.js', error.message);
        res.status(error.status).json({error: error.message, status: error.status})
    }
}