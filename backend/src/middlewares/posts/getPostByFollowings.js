import Post from "../../models/Post.js";

export default async (req, res, next) => {
    try {
        const userAuth = req.userAuth;

        const getPostsOfFollowings = await Post.aggregate([           // CAPA PADRE
            {
                $lookup: {            // Post, debe mirar en la coleccion "users"
                    from: 'users',
                    localField: 'postBy',  // coleccion de Post
                    foreignField: '_id',    // coleccion de users
                    let :{
                        followingsInPost: '$postBy'    // hace referencia a "Post", en su variable postBy ( id de usuarios )
                    },
                    pipeline: [
                        {
                            $match: {
                                $expr: {   
                                    $in: [ '$$followingsInPost', userAuth.followings.map(following => following._id) ]
                                    // como userAuth.followings es un array de objetos { imgProfile, _id, username } hay que:
                                    // 1) transformar el array de objetos en un array de _id, para acceder mas facil a esa propiedad
                                    // 2) buscar dentro del arreglo de _id las coincidencias entre postBy === _id de usuarios
                                }
                            }
                        }
                    ],
                    as: 'foundedPosts' // variable donde se guardan los resultados
                }
            },
            {
                $match: {
                    'foundedPosts': { $ne: [] } // los que no cumplen con las condiciones son arrays vacios, entonces no se tienen en cuenta.
                }
            }
        ]).sort({ createdAt: -1 });
                
        
        
        const replacePostToFollowings = getPostsOfFollowings.map(item => {
            item.foundedPosts = {
                imgProfile: item.foundedPosts.map(usr => usr.imgProfile).join(''),
                username: item.foundedPosts.map(usr => usr.username).join(''),
                _id: item.foundedPosts.map(usr => usr._id).join('')
            }
            return { ... item};
        })
        
        return res.status(200).json({ post: replacePostToFollowings, status: 200, message: 'Founded posts' })
    } catch (error) {
        console.error('Ocurrio un error en el middleware getPostByFollowings.js. Error: ', error);
        next(error);
    }
}



