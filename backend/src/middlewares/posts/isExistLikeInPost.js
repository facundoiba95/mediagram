import addCountersInPost from "../../libs/Posts/addCountersInPost.js";
import Post from "../../models/Post.js";

export default async ( req, res, next ) => {
    try {          
        const { idPost, _id, postedBy } = req.body; 
        const foundPost = await Post.findById(idPost);
        const isExistLike = foundPost.likes.findIndex(user => user._id == _id );
    
        if(isExistLike !== -1){
            foundPost.likes.splice(isExistLike, 1);
            foundPost.likedPost = false;
            
            await addCountersInPost(foundPost)
            
            const addPostedBy = [foundPost._doc].map(item => {
                return {
                    ... item,
                    postedBy
                }
            })
        
            return res.status(200).json({ post: addPostedBy ,message: 'Delete like!', status:200 });
        }

        next();
    } catch (error) {
        console.error('Ocurrio un error en el middleware isExistLikeInPost.js. Error: ', error);
        next(error);
    }
}

