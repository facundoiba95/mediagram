import Tags from "../../models/Tags.js";

export default async (req, res, next) => {
    try {
        const tagsFound = req.tagsFound;

        if (!tagsFound.length) return next();

        const idsTags = tagsFound.map(tag => tag._id);

        const tagsByPost = await Tags.aggregate([
            // etapa 1: relacionar Posts con tags encontrados.
            { $match: { _id: { $in: idsTags } } },
            // etapa 2: relacionar los posts.tags con Tags._id y guardarlos en esta variable
            {
                $lookup: {
                    from: 'posts',
                    localField: '_id',
                    foreignField: 'tags',
                    as: 'relatedPosts'
                }
            },
            { $unwind: '$relatedPosts' },
            // etapa 2: obtener los posts que se puedan compartir en seccion Explorar.
            { $match: { 'relatedPosts.shareInExplore': true } },
            // etapa 3: agrupar luego del unwind.
            {
                $group: {
                    _id: '$_id',
                    name: { $first: '$name' },
                    relatedPosts: { $push: '$relatedPosts' },
                }
            },
            // etapa 4: seleccionar campos para enviar al frontend
            {
                $project: {
                    _id: 1,
                    name: 1,
                    countPosts: { $size: "$relatedPosts" }
                }
            },
            // etapa 5: ordenar segun la mayor cantidad de Posts.
            { $sort: { "countPosts": -1 } }
        ]);

        req.postsFound = await tagsByPost;

        next()
    } catch (error) {
        console.error('Ocurrio un error en MIDDLEWARE countPostByTags.js. Error:', error);
        next(error)
    }
}