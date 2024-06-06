import Post from "../../models/Post.js";

export default async (req, res, next) => {
    try {
        const userAuth = req.userAuth;
        const getPostsOfFollowings = await Post.aggregate([
            // Etapa 1: obtener posts de usuarios seguidos.
            {
                $lookup: {
                    from: 'users',
                    localField: 'postBy',
                    foreignField: '_id',
                    let: {
                        followingsInPost: '$postBy'
                    },
                    pipeline: [
                        {
                            $match: {
                                $expr: {
                                    $in: ['$$followingsInPost', userAuth.followings.map(following => following._id)],
                                }
                            }
                        }
                    ],
                    as: 'foundedPosts'
                }
            },
            // Etapa 2: excluir documentos vacios.
            {
                $match: {
                    'foundedPosts': { $ne: [] }
                }
            },          
        ]).sort({ createdAt: -1 });

        const replacePostToFollowings = getPostsOfFollowings.map(item => {
            item.foundedPosts = {
                imgProfile: item.foundedPosts.map(usr => usr.imgProfile).join(''),
                username: item.foundedPosts.map(usr => usr.username).join(''),
                _id: item.foundedPosts.map(usr => usr._id).join('')
            }
            return { ...item };
        })
        
        req.postByFollowings = replacePostToFollowings;
        next();
    } catch (error) {
        console.error('Ocurrio un error en el middleware getPostByFollowings.js. Error: ', error);
        next(error);
    }
}



