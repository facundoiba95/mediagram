<<<<<<< HEAD
import Post from "../../models/Post.js";

export default async (idUserAuth) => {
    try {
        await Post.updateMany(
            {postBy: idUserAuth},
            {shareInExplore: false}
        )

    } catch (error) {
        console.error('Ocurrio un error al cambiar la propiedad Post.shareinExplore, en changeShareInExplore.js. Error: ', error)
        return error;
    }
=======
import Post from "../../models/Post.js";

export default async (idUserAuth) => {
    try {
        await Post.updateMany(
            {postBy: idUserAuth},
            {shareInExplore: false}
        )

    } catch (error) {
        console.error('Ocurrio un error al cambiar la propiedad Post.shareinExplore, en changeShareInExplore.js. Error: ', error)
        return error;
    }
>>>>>>> b3173dc1 (first commit in Ubuntu)
}