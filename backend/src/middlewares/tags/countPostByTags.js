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
            // etapa 4: obtener los posts que se puedan compartir. Cuentas publicas.
            {
                $match: {
                    'relatedPosts.shareInExplore': true
                }
            },
            // etapa 5: volver a agrupar
            {
                $group: {
                    _id: '$_id',
                    name: { $first: '$name' },
                    relatedPosts: { $push: '$relatedPosts' },
                }
            },
            // etapa 6: seleccionar campos para enviar al frontend
            {
                $project: {
                    _id: 1,
                    name: 1,
                    countPosts: {$size: "$relatedPosts"}
                }
            },
            {
                $sort: {"countPosts" : -1}
            }
        ]);

        req.postsFound = await tagsByPost;

        next()
    } catch (error) {
        console.error('Ocurrio un error en MIDDLEWARE associateTagsByPosts. Error:', error);
        next(error)
    }
}