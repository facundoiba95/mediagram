import User from "../models/User.js";

export default async ( username,idUser ) => {
    const foundUserRecived = await User.findOne({ username });
    const userAuth = await User.findOne({_id: idUser});
    const isFollowingsUsers = foundUserRecived.followers.some(usr => usr.username === userAuth.username);
    
    return isFollowingsUsers;
}