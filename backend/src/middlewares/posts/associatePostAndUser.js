import mongoose from "mongoose";
import Post from "../../models/Post.js";

export default async ( req,res, next ) => {
    try {
        const idPost = new mongoose.Types.ObjectId(req.params.idPost);
        const foundPost = await Post.aggregate([
            {
                $lookup: {
                    from: 'users',
                    localField: '_id',
                    foreignField: 'posts',
                    as: 'postedBy',  // guarda los USUARIOS relacionados con los posts
                    let: {
                        idPostUser: '$_id' // referencia al _id de coleccion POST
                    },
                    pipeline: [
                        {
                            $match: {
                                $expr: {
                                    $in: ['$$idPostUser', [idPost] ]  // obtiene el post solicitado
                                }
                            }
                        }
                    ]
                }
            },
            {
                $unwind: '$postedBy'
            }
        ]);

        if(!foundPost.length) return await Promise.reject({ error: 'Post not found', status: 404 });

        req.isPrivateProfile = foundPost[0].postedBy.isPrivate;

        const restrictDataUser = foundPost.map(post => {
            post.postedBy = {
                username: post.postedBy.username,
                thumbnail: post.postedBy.thumbnail,
            }
            return { ... post }
        });

        req.associatePostAndUser = restrictDataUser  // se envia el post encontrado al siguiente middleware o controlador en el objeto "req" ;
        
        next();
    } catch (error) {
        console.error('Ocurrio un error en el middleware associatePostAndUser.js . Error: ',{error: error.message, status: error.status});
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