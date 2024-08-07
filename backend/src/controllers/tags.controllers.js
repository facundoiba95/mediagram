<<<<<<< HEAD
import Tags from "../models/Tags.js";

export const tagsFound = async (req, res) => {
    try {
        const tagsFound = req.tagsFound;
        const postsFound = req.postsFound;
        const selectResult = postsFound && postsFound.length ? postsFound : tagsFound;

        if (!selectResult.length){
            return res.status(404).json({ message: 'No se encontraron tags!', status: 404, tags: selectResult })
        }

        return res.status(200).json({ message: 'Tags encontrados!', status: 200, tags: selectResult });
    } catch (error) {
        console.error('Ocurrio un error en tagsFound(). tags.controllers.js', error.message);
        res.status(500).json({ error: error.message, status: 500 });
    }
}

export const createTag = async (req,res) => {
    try {
        const { tag } = req.body;

        const existTag = await Tags.find({name: tag.trim()});
       
        if(existTag.length) return res.status(409).json({ message: `El tag "${tag}" ya existe!`, status: 409, tags: existTag }); 
       
        const newTag = new Tags({
            name: tag
        });

        await newTag.save();

        res.status(200).json({ message: `El tag "${tag}" ha sido creado!`, status: 200, tags: [newTag]});
    } catch (error) {
        console.error('Ocurrio un error en createTag(). tags.controllers.js', error.message);
        res.status(500).json({ error: error.message, status: 500 });
    }
}

export const getTrendTags = async (req,res) => {
    try {
        const postByTags = await Tags.aggregate([
            {
                $lookup: {
                    from: "posts",
                    localField: "_id",
                    foreignField: "tags",
                    as: "postByTags"
                }
            },
            {
                $unwind: "$postByTags"
            },
            {
                $match: {
                    "postByTags.shareInExplore": true
                }
            },
            {
                $group: {
                    _id: '$_id',
                    name: { $first: '$name' },
                    count: {$sum: 1},
                }   
            },
            {
                $sort: {
                    "count": -1
                }
            }
        ]).limit(5);

        if(!postByTags.length) return res.status(404).json({status: 404, trendTags: [], message: 'No se encontraron tags.'});

        res.status(200).json({trendTags: postByTags, status: 200})
    } catch (error) {
        console.error('Ocurrio un error en getTrendTags(). tags.controllers.js', error.message);
        res.status(500).json({ error: error.message, status: 500 });
    }
=======
import Tags from "../models/Tags.js";

export const tagsFound = async (req, res) => {
    try {
        const tagsFound = req.tagsFound;
        const postsFound = req.postsFound;
        const selectResult = postsFound && postsFound.length ? postsFound : tagsFound;

        if (!selectResult.length){
            return res.status(404).json({ message: 'No se encontraron tags!', status: 404, tags: selectResult })
        }

        return res.status(200).json({ message: 'Tags encontrados!', status: 200, tags: selectResult });
    } catch (error) {
        console.error('Ocurrio un error en tagsFound(). tags.controllers.js', error.message);
        res.status(500).json({ error: error.message, status: 500 });
    }
}

export const createTag = async (req,res) => {
    try {
        const { tag } = req.body;

        const existTag = await Tags.find({name: tag.trim()});
       
        if(existTag.length) return res.status(409).json({ message: `El tag "${tag}" ya existe!`, status: 409, tags: existTag }); 
       
        const newTag = new Tags({
            name: tag
        });

        await newTag.save();

        res.status(200).json({ message: `El tag "${tag}" ha sido creado!`, status: 200, tags: [newTag]});
    } catch (error) {
        console.error('Ocurrio un error en createTag(). tags.controllers.js', error.message);
        res.status(500).json({ error: error.message, status: 500 });
    }
}

export const getTrendTags = async (req,res) => {
    try {
        const postByTags = await Tags.aggregate([
            {
                $lookup: {
                    from: "posts",
                    localField: "_id",
                    foreignField: "tags",
                    as: "postByTags"
                }
            },
            {
                $unwind: "$postByTags"
            },
            {
                $match: {
                    "postByTags.shareInExplore": true
                }
            },
            {
                $group: {
                    _id: '$_id',
                    name: { $first: '$name' },
                    count: {$sum: 1},
                }   
            },
            {
                $sort: {
                    "count": -1
                }
            }
        ]).limit(5);

        if(!postByTags.length) return res.status(404).json({status: 404, trendTags: [], message: 'No se encontraron tags.'});

        res.status(200).json({trendTags: postByTags, status: 200})
    } catch (error) {
        console.error('Ocurrio un error en getTrendTags(). tags.controllers.js', error.message);
        res.status(500).json({ error: error.message, status: 500 });
    }
>>>>>>> b3173dc1 (first commit in Ubuntu)
}