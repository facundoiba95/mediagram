import Tags from "../../models/Tags.js";

export default async (req, res, next) => {
    try {
        const tagsFound = req.tagsFound;

        if (!tagsFound.length) return next();

        const idsTags = tagsFound.map(tag => tag._id);

        const tagsByPost = await Tags.aggregate([
            // etapa 1: filtrar los tags encontrados anteriormente
            {
                $match: {
                    _id: { $in: idsTags }
                }
            },
            // etapa 2: relacionar los posts.tags con Tags._id y guardarlos en esta variable
            {
                $lookup: {
                    from: 'posts',
                    localField: '_id',
                    foreignField: 'tags',
                    as: 'relatedPosts'
                }
            },
            // etapa 3: desenredar el array relatedPosts
            {
                $unwind: '$relatedPosts'
            },
            // etapa 4: obtener los posts que se puedan compartir. Cuentas públicas.
            {
                $match: {
                    'relatedPosts.shareInExplore': true
                }
            },
            // etapa 5: hacer lookup para obtener la información del usuario que creó el post
            {
                $lookup: {
                    from: "users",
                    localField: "relatedPosts.postBy",
                    foreignField: "_id",
                    as: "postByUser"
                }
            },
            // etapa 6: desenredar el array postByUser
            {
                $unwind: '$postByUser'
            },
            // etapa 7: proyectar solo los campos deseados del usuario
            {
                $addFields: {
                    'relatedPosts.postBy': {
                        _id: '$postByUser._id',
                        username: '$postByUser.username',
                        thumbnail: '$postByUser.thumbnail',
                        isPrivate: '$postByUser.isPrivate'
                    }
                }
            },
            // etapa 8: eliminar el campo postByUser ya que no es necesario
            {
                $project: {
                    'postByUser': 0
                }
            },
            // etapa 9: ordenar de mayor a menor cantidad de vistas
            {
                $sort: {
                    'relatedPosts.counterViews': -1
                }
            },
            // etapa 10: volver a agrupar
            {
                $group: {
                    _id: '$_id',
                    name: { $first: '$name' },
                    relatedPosts: { $push: '$relatedPosts' }
                }
            },
            // etapa 11: seleccionar campos para enviar al frontend
            {
                $project: {
                    _id: 1,
                    name: 1,
                    'relatedPosts._id': 1,
                    'relatedPosts.thumbnail': 1,
                    'relatedPosts.tags': 1,
                    'relatedPosts.postBy': 1,
                    'relatedPosts.counterViews': 1,
                    'relatedPosts.counterLikes': 1,
                    'relatedPosts.counterComments': 1,
                    'relatedPosts.mediaType': 1,
                    'relatedPosts.textContent': 1,
                    'relatedPosts.createdAt': 1,
                    'relatedPosts.likes': 1
                }
            }
        ]);

        req.postsFound = tagsByPost;
        next();
    } catch (error) {
        console.error('Ocurrio un error en MIDDLEWARE associateTagsByPosts. Error:', error);
        next(error);
    }
};

// 'relatedPosts.postBy': {
//     $map: {
//         input: "$relatedPosts.postBy",
//         as: "postBy",
//         in: {
//             _id: "$$postBy._id",
//             username: "$$postBy.username",
//             thumbnail: "$$postBy.thumbnail",
//             isPrivate: "$$postBy.isPrivate"
//         }
//     }
// },
