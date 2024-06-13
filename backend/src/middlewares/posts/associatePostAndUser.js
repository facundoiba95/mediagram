import mongoose from "mongoose";
import Post from "../../models/Post.js";
import verifyToken_Post from "../../libs/verifyToken_Post.js";

export default async (req, res, next) => {
    try {
        const idPost = new mongoose.Types.ObjectId(req.params.idPost);
        const token = req.headers["x-access-token"];

        const postByUser = await Post.find({ _id: idPost }).populate({
            path: 'postBy',
            select: 'username thumbnail imgProfile isPrivate _id'
        }).populate({
            path: "tags"
        })

        if (!postByUser.length) return await Promise.reject({ error: 'Post not found', status: 404 });

        req.isPrivateProfile = postByUser[0].postBy.isPrivate;
        req.idPostBy = postByUser[0].postBy._id;
        req.associatePostAndUser = postByUser  // se envia el post encontrado al siguiente middleware o controlador en el objeto "req" ;

        req.validation = await verifyToken_Post(token, req.idPostBy);

        next();
    } catch (error) {
        console.error('Ocurrio un error en el middleware associatePostAndUser.js . Error: ', { error: error.error, status: error.status });
        next(error);
    }
}



/*

   1) se envia la solicitud getPostByID con token o sin token  **** verifyToken ****
   2) se obtiene el post - usuario, obtenida en associatePostAndUser ( req.getPostByID )  **** associatePostAndUser ****
   
   3) se comprueba si el usuario que hizo el post tiene cuenta privada:         *** isPrivate ***
        - CUENTA PRIVADA:
             a) req.isLogged === false
                   NO DEVOLVER EL POST, SOLAMENTE EL STATUS CODE Y MENSAJE
             
            b) req.isLogged === true
                   - isFollowing(username, idUser): 
                       "username" valor del usuario recibido
                       "idUser" valor del usuario dueño del post

                       - isFollowing === true: DEVOLVER POST
                       
                       - isFollowing === false: NO DEVOLVER POST
                       
        

        - CUENTA PUBLICA:
             - DEVOLVER POST

*/