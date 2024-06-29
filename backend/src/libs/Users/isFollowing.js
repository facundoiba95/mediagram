import User from "../../models/User.js";

// @param usernameRecived = String
// @param idUserAuth = mongoose.Types.ObjectId
export default async ( usernameRecived, idUserAuth ) => {
    const foundUserRecived = await User.findOne({ username: usernameRecived });
    const userAuth = await User.findOne({_id: idUserAuth});
    const isFollowingsUsers = foundUserRecived.followers.some(usr => usr.username === userAuth.username);
    return isFollowingsUsers;
}