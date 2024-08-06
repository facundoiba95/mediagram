<<<<<<< HEAD
import User from '../../models/User.js';
import mongoose from 'mongoose';

export default async (postBy, idPost) => {
    try {
        const foundUser = await User.findOne({_id: postBy});
        foundUser.posts.push( new mongoose.Types.ObjectId(idPost));
        await foundUser.save();
    } catch (error) {
        console.error('Ocurrio un error en addPostToUser().',error)
    }
=======
import User from '../../models/User.js';
import mongoose from 'mongoose';

export default async (postBy, idPost) => {
    try {
        const foundUser = await User.findOne({_id: postBy});
        foundUser.posts.push( new mongoose.Types.ObjectId(idPost));
        await foundUser.save();
    } catch (error) {
        console.error('Ocurrio un error en addPostToUser().',error)
    }
>>>>>>> b3173dc1 (first commit in Ubuntu)
}