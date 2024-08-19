import Post from "../../models/Post.js";

export default async (req, res, next) => {
    try {
        const userAuth = req.userAuth;

        userAuth.followings.push(userAuth._id);

        const populateFieldsInPost = await Post
            .find({
                postBy: { $in: userAuth.followings },
                typePost: { $ne: "EXCLUSIVEPOST" }
            })
            .populate({
                path: "postBy",
                select: "_id username thumbnail"
            })
            .populate({
                path: "comments",
                limit: 10,
                populate: {
                    path: "commentBy",
                    select: "_id thumbnail username"
                }
            })
            .populate({
                path: "referTo",
                select: "_id username thumbnail"
            })
            .sort({createdAt: -1});


        req.postByFollowings = populateFieldsInPost;

        next();
    } catch (error) {
        console.error('Ocurrio un error en el middleware getPostByFollowings.js. Error: ', error);
        next(error);
    }
}











