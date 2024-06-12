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
}