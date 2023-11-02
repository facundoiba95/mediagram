import mongoose from "mongoose";

export default async ({ imgProfile, username, _id, userAuth, userFollower, foundFollowUpRequest }) => {
    try {
        const addUserRecivedInAuth = {
            imgProfile,
            username,
            _id: new mongoose.Types.ObjectId(_id)
        }   

        const addUserAuthInRecived = { 
            imgProfile: userAuth.imgProfile,
            username: userAuth.username, 
            _id: new mongoose.Types.ObjectId(userAuth._id )
        }
        foundFollowUpRequest.status = 'ACCEPT';

        userAuth.followers.unshift(addUserRecivedInAuth);
        userFollower.followings.unshift(addUserAuthInRecived);
        await userAuth.save();
        await userFollower.save();
    } catch (error) {
        console.error('Ocurrio un error en la funcion addFollower(). Error', error);
        return;
    }
}