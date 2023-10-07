import User from "../models/User.js";

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
            email: 0
        })
        
        if(!foundUser.length) return res.status(404).json({message: 'No se encontraron usuarios!', status: 404, userFound:[]})
        return res.status(200).json({message:'users searched!', status:200, userFound: foundUser});
    } catch (error) {
        console.error('Ocurrio un error en searchUser(). user.controllers.js', error.message);
        res.status(500).json({error: error.message, status:500});
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
        const { _id } = req.body;

        const foundUserFollowing = await User.findOne({_id: req.idUser });
        const foundUserFollower = await User.findOne({_id});
       
        foundUserFollowing.followings =  foundUserFollowing.followings.filter(usr => usr._id !== _id);
        foundUserFollower.followers = foundUserFollower.followers.filter(usr => usr._id.toString() !== req.idUser);
        
        await foundUserFollowing.save();
        await foundUserFollower.save();

        return res.status(200).json({ message: `Dejaste de seguir a ${foundUserFollower.username}!`, status:200});
    } catch (error) {
        console.error(error.message);
        return res.status(error.status).json({error: error.message, status: error.status });
    }
}
export const verifyUser = async ( req,res ) => {
    try {
        const { username } = req.body;
        const foundUser = await User.find({username}, {password: 0});
        res.status(200).json({ message: 'refresh user!', user: foundUser, status: 200}); 
    } catch (error) {
        console.error('Ocurrio un error en verifyUser(). user.controllers.js', error.message);
        res.status(error.status).json({error: error.message, status: error.status})
    }
}