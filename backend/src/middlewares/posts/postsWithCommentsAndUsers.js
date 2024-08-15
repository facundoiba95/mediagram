import Post from "../../models/Post.js";

export const postWithCommentAndUser = async (req, res) => {
    try {
        const userAuth = req.userAuth;

        userAuth.followings.push(userAuth._id);

        const postWithCommentAndUser = await Post.aggregate([
            // Etapa 1: Obtener posts de usuarios seguidos.
            {
                $lookup: {
                    from: 'users',
                    localField: 'postBy',
                    foreignField: '_id',
                    let: { followingsInPost: '$postBy' },
                    pipeline: [
                        {
                            $match: {
                                $expr: {
                                    $in: ['$$followingsInPost', userAuth.followings],
                                }
                            }
                        }
                    ],
                    as: 'postByUser'
                }
            },
            // Etapa 2: Excluir documentos vacíos.
            { $match: { 'postByUser': { $ne: [] } } },
            // Etapa 3: Unir comentarios.
            {
                $lookup: {
                    from: "comments",
                    localField: "_id",
                    foreignField: "referenceId",
                    as: "comments"
                }
            },
            // Deshacer la agrupación de comentarios.
            { $unwind: { path: "$comments", preserveNullAndEmptyArrays: true } },
            // Etapa 4: Unir los datos del usuario que comentó.
            {
                $lookup: {
                    from: "users",
                    localField: "comments.commentBy",
                    foreignField: "_id",
                    as: "comments.commentBy"
                }
            },
            // Deshacer la agrupación de datos del usuario que comentó.
            { $unwind: { path: "$comments.commentBy", preserveNullAndEmptyArrays: true } },
            // Etapa 5: Agrupar datos finales.
            {
                $group: {
                    _id: "$_id",
                    createdAt: { $first: "$createdAt" },
                    updatedAt: { $first: "$updatedAt" },
                    comments: { $push: "$comments" },
                    referTo: { $first: "$referTo" },
                    description: { $first: "$description" },
                    shareInExplore: { $first: "$shareInExplore" },
                    location: { $first: "$location" },
                    counterLikes: { $first: "$counterLikes" },
                    counterViews: { $first: "$counterViews" },
                    counterComments: { $first: "$counterComments" },
                    anonymViews: { $first: "$anonymViews" },
                    textContent: { $first: "$textContent" },
                    views: { $first: "$views" },
                    likes: { $first: "$likes" },
                    thumbnail: { $first: "$thumbnail" },
                    media_url: { $first: "$media_url" },
                    tags: { $first: "$tags" },
                    postBy: { $first: "$postBy" },
                    typePost: { $first: "$typePost" },
                    postByUser: { $first: "$postByUser" }
                }
            },
            // Etapa 6: Proyectar los campos necesarios.
            {
                $project: {
                    _id: 1,
                    createdAt: 1,
                    updatedAt: 1,
                    comments: {
                        $map: {
                            input: "$comments",
                            as: "comment",
                            in: {
                                _id: "$$comment._id",
                                comment: "$$comment.comment",
                                commentBy: {
                                    _id: "$$comment.commentBy._id",
                                    username: "$$comment.commentBy.username",
                                    thumbnail: "$$comment.commentBy.thumbnail"
                                },
                                referenceId: "$$comment.referenceId",
                                likes: "$$comment.likes",
                                counterLikes: "$$comment.counterLikes",
                                replies: "$$comment.replies",
                                createdAt: "$$comment.createdAt",
                                updatedAt: "$$comment.updatedAt"
                            }
                        }
                    },
                    referTo: 1,
                    description: 1,
                    shareInExplore: 1,
                    location: 1,
                    counterLikes: 1,
                    counterViews: 1,
                    counterComments: 1,
                    anonymViews: 1,
                    textContent: 1,
                    views: 1,
                    likes: 1,
                    thumbnail: 1,
                    media_url: 1,
                    tags: 1,
                    postBy: 1,
                    typePost: 1,
                    postByUser: {
                        $map: {
                            input: "$postByUser",
                            as: "postByUser",
                            in: {
                                _id: "$$postByUser._id",
                                username: "$$postByUser.username",
                                thumbnail: "$$postByUser.thumbnail",
                                isPrivate: "$$postByUser.isPrivate"
                            }
                        }
                    }
                }
            }
        ]);

        res.status(200).json(postWithCommentAndUser.length);
    } catch (error) {
        console.error('Error en postWithCommentAndUser. Error: ', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};