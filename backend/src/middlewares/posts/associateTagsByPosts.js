import Tags from "../../models/Tags.js";

export default async (req, res, next) => {
    try {
        const tagsFound = req.tagsFound;

        if (!tagsFound.length) return next();

        const idsTags = tagsFound.map(tag => tag._id);

        const tagsByPost = await Tags.aggregate([
            // etapa 1: relacionar Tags encontrados con Posts compartidos en 
            // seccion Explorar.
            { $match: { _id: { $in: idsTags } } },
            {
                $lookup: {
                    from: 'posts',
                    localField: '_id',
                    foreignField: 'tags',
                    as: 'relatedPosts'
                }
            },
            { $unwind: '$relatedPosts' },
            { $match: { 'relatedPosts.shareInExplore': true } },
            // etapa 2: obtener datos del autor del Post
            {
                $lookup: {
                    from: "users",
                    localField: "relatedPosts.postBy",
                    foreignField: "_id",
                    as: "postByUser"
                }
            },
            { $unwind: '$postByUser' },
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
            { $project: { 'postByUser': 0 } },
            // etapa 3: ordenar de mayor a menor en Views y agrupar nuevamente 
            // los resultados.
            { $sort: { 'relatedPosts.counterViews': -1 } },
            {
                $group: {
                    _id: '$_id',
                    name: { $first: '$name' },
                    relatedPosts: { $push: '$relatedPosts' }
                }
            },
            // etapa 4: seleccionar los datos que se muestran al cliente.
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
        console.error('Ocurrio un error en middleware associateTagsByPosts.js. Error:', error);
        next(error);
    }
};

