<<<<<<< HEAD
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
        console.error('Ocurrió un error en post.controllers.js, "searchTags()". Error: ', error);
        next(error);
    }
=======
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
        console.error('Ocurrió un error en post.controllers.js, "searchTags()". Error: ', error);
        next(error);
    }
>>>>>>> b3173dc1 (first commit in Ubuntu)
}