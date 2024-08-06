<<<<<<< HEAD
import { IMAGE, VIDEO, image_extension, video_extension } from "../../libs/fileExtensions.js";

export default async (req, res, next) => {
    try {
        const isTextContent = req.body.textContent;
        
        if(isTextContent) return next();

        const originalname = req.file.originalname;

        if (image_extension.test(originalname)) {
            req.mediaType = IMAGE;
            return next();
        } else if (video_extension.test(originalname)) {
            req.mediaType = VIDEO;
            return next();
        }
    } catch (error) {
        console.error("Ocurrio un error en select_mediaType. Error: ", error.message);
        return res.status(500).json({ error: error.message, status: 500 });
    }
}
=======
import { IMAGE, VIDEO, image_extension, video_extension } from "../../libs/fileExtensions.js";

export default async (req, res, next) => {
    try {
        const isTextContent = req.body.textContent;
        
        if(isTextContent) return next();

        const originalname = req.file.originalname;

        if (image_extension.test(originalname)) {
            req.mediaType = IMAGE;
            return next();
        } else if (video_extension.test(originalname)) {
            req.mediaType = VIDEO;
            return next();
        }
    } catch (error) {
        console.error("Ocurrio un error en select_mediaType. Error: ", error.message);
        return res.status(500).json({ error: error.message, status: 500 });
    }
}
>>>>>>> b3173dc1 (first commit in Ubuntu)
