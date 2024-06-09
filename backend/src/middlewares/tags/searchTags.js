import Tags from "../../models/Tags.js";

export default async (req,res,next) => {
    try {
        const { nameTag } = req.query;
        const tagsFound = await Tags.find({
            $or: [
                { name: { $eq: nameTag.trim() } }, { name: { $regex: nameTag.trim() } }
            ]
        })

        req.tagsFound = tagsFound;
        next();
    } catch (error) {
        console.error('Ocurrio un error en post.controllers.js, "searchTags()". Error: ',error);
        next(error)
    }
}