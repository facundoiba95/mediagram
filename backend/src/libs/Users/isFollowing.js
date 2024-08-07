<<<<<<< HEAD
import User from "../../models/User.js";

// @param usernameRecived = String
// @param idUserAuth = mongoose.Types.ObjectId
export default async ( usernameRecived, idUserAuth ) => {
    const foundUserRecived = await User.findOne({ username: usernameRecived });
    const userAuth = await User.findOne({_id: idUserAuth});
    const isFollowingsUsers = foundUserRecived.followers.some(usr => usr.equals(userAuth._id));
    return isFollowingsUsers;
=======
import User from "../../models/User.js";

// @param usernameRecived = String
// @param idUserAuth = mongoose.Types.ObjectId
export default async ( usernameRecived, idUserAuth ) => {
    const foundUserRecived = await User.findOne({ username: usernameRecived });
    const userAuth = await User.findOne({_id: idUserAuth});
    const isFollowingsUsers = foundUserRecived.followers.some(usr => usr.equals(userAuth._id));
    return isFollowingsUsers;
>>>>>>> b3173dc1 (first commit in Ubuntu)
}