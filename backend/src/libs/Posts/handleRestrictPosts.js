<<<<<<< HEAD
import { EXCLUIVE_POST } from "../../controllers/post.controllers.js";
import Post from "../../models/Post.js";

// params userSelected = [Object]
// params idAuth = ObjectId
export default async (userSelected, idAuth) => {
    try {
        const isExclusiveUser = userSelected[0].closeList.some(usr => usr.equals(idAuth));
        const isUserAuth = userSelected.some(usr => usr._id.equals(idAuth));

        if(isUserAuth){
            const getPosts = await Post.find({postBy: idAuth}).sort({ createdAt: -1 });
            return getPosts;
        } 
        
        if (!isExclusiveUser) {
            const exclude_ExclusivePosts = await Post.find({ postBy: userSelected[0]._id, typePost: { $ne: EXCLUIVE_POST } }).sort({ createdAt: -1 });
            return exclude_ExclusivePosts;
        } else {
            const getPosts = await Post.find({postBy: userSelected[0]._id}).sort({ createdAt: -1 });
            return getPosts;
        }
    } catch (error) {
        console.error('Ocurrio un eror en filterPost_closeList middleware. Error: ', error)
        return false;
    }
=======
import { EXCLUIVE_POST } from "../../controllers/post.controllers.js";
import Post from "../../models/Post.js";

// params userSelected = [Object]
// params idAuth = ObjectId
export default async (userSelected, idAuth) => {
    try {
        const isExclusiveUser = userSelected[0].closeList.some(usr => usr.equals(idAuth));
        const isUserAuth = userSelected.some(usr => usr._id.equals(idAuth));

        if(isUserAuth){
            const getPosts = await Post.find({postBy: idAuth}).sort({ createdAt: -1 });
            return getPosts;
        } 
        
        if (!isExclusiveUser) {
            const exclude_ExclusivePosts = await Post.find({ postBy: userSelected[0]._id, typePost: { $ne: EXCLUIVE_POST } }).sort({ createdAt: -1 });
            return exclude_ExclusivePosts;
        } else {
            const getPosts = await Post.find({postBy: userSelected[0]._id}).sort({ createdAt: -1 });
            return getPosts;
        }
    } catch (error) {
        console.error('Ocurrio un eror en filterPost_closeList middleware. Error: ', error)
        return false;
    }
>>>>>>> b3173dc1 (first commit in Ubuntu)
}