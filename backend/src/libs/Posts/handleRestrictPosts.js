import { EXCLUIVE_POST } from "../../controllers/post.controllers.js";
import Post from "../../models/Post.js";

// params userSelected = [Object]
// params idAuth = ObjectId
export default async (userSelected, idAuth) => {
    try {
        const isExclusiveUser = userSelected[0].closeList.some(usr => usr.equals(idAuth));
        const isUserAuth = userSelected.some(usr => usr._id.equals(idAuth));

        if(isUserAuth){
            const getPosts = await Post.find({postBy: idAuth});
            return getPosts;
        } 
        
        if (!isExclusiveUser) {
            const exclude_ExclusivePosts = await Post.find({ postBy: userSelected[0]._id, typePost: { $ne: EXCLUIVE_POST } });
            return exclude_ExclusivePosts;
        } else {
            const getPosts = await Post.find({postBy: userSelected[0]._id});
            return getPosts;
        }
    } catch (error) {
        console.error('Ocurrio un eror en filterPost_closeList middleware. Error: ', error)
        return false;
    }
}