import Post from "../../models/Post.js";
import Tags from "../../models/Tags.js";

export default async (req,res,next) => {
    try {
        const tagsFound = req.tagsFound;

        if(!tagsFound.length) return next();
        
        const idsTags = tagsFound.map(tag => tag._id);

        const tagsByPost = await Tags.aggregate([
            // Etapa 1: filtrar los tags encontrados anteriormente
            { 
                $match: { _id: { $in: idsTags} } 
            }, 
            // Etapa 2: relacionar los posts.tags con Tags._id y guardarlos en esta variable
            {
                $lookup: {
                    from: 'posts',
                    localField: '_id', 
                    foreignField: 'tags',
                    as: 'relatedPosts' 
                }
            },
            // Etapa 3: Enviar solamente estos campos al cliente
            {
                $project: {
                    _id: 1,
                    name: 1,
                    'relatedPosts._id': 1,
                    'relatedPosts.thumbnail': 1,
                    'relatedPosts.tags': 1,
                    'relatedPosts.postBy': 1,
                    'relatedPosts.counterViews': 1,
                    'relatedPosts.counterLikes': 1
                }
            }
        ]);

        req.postsFound = await tagsByPost;
        next()
    } catch (error) {
        console.error('Ocurrio un error en MIDDLEWARE associateTagsByPosts. Error:', error);
        next(error)
    }
}