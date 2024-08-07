<<<<<<< HEAD
import User from "../../models/User.js";

export default async ( req,res,next ) => {
    try {
        const { username } = req.body;

        const foundUserFollowing = req.userAuth;
        const foundUserFollower = await User.findOne({username});

        if(!foundUserFollowing) return await Promise.reject({ error: 'User not found.', status: 404 });

        const isFollowing = foundUserFollowing.followings.some( user => user.equals(foundUserFollower._id));
        if(isFollowing) return await Promise.reject({ error: 'Is following user!', status: 409 });

        req.foundUserFollower = foundUserFollower;
        req.foundUserFollowing = foundUserFollowing;
        next();
    } catch (error) {
        console.error('Ocurrió un error en middleware isExistUserFollow.js. Error: ',error );
        next(error);
    }
=======
import User from "../../models/User.js";

export default async ( req,res,next ) => {
    try {
        const { username } = req.body;

        const foundUserFollowing = req.userAuth;
        const foundUserFollower = await User.findOne({username});

        if(!foundUserFollowing) return await Promise.reject({ error: 'User not found.', status: 404 });

        const isFollowing = foundUserFollowing.followings.some( user => user.equals(foundUserFollower._id));
        if(isFollowing) return await Promise.reject({ error: 'Is following user!', status: 409 });

        req.foundUserFollower = foundUserFollower;
        req.foundUserFollowing = foundUserFollowing;
        next();
    } catch (error) {
        console.error('Ocurrió un error en middleware isExistUserFollow.js. Error: ',error );
        next(error);
    }
>>>>>>> b3173dc1 (first commit in Ubuntu)
}