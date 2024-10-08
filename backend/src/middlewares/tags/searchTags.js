import Tags from "../../models/Tags.js";

export default async (req, res, next) => {
    try {
        const { nameTag } = req.query;

        const exactMatch = await Tags.find({
            name: { $eq: nameTag.trim() }
        });

        if (exactMatch.length) {
            req.tagsFound = exactMatch;
            return next();
        } else {
            const regexMatch = await Tags.find({
                name: { $regex: nameTag.trim() } 
            });
            req.tagsFound = regexMatch;
            return next();
        }

    } catch (error) {
        console.error('Ocurrió un error en middleware "searchTags()". Error: ', error);
        next(error);
    }
}