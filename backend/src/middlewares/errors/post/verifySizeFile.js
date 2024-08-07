<<<<<<< HEAD
import { maxFileSize_cloudinary } from "../../../config/cloudinary.config.js"
import { VIDEO } from "../../../libs/fileExtensions.js";

export default async (req, res, next) => {
    try {
        const isTextContent = req.body.textContent;

        if (isTextContent) return next();

        const mediaType = req.mediaType;
        if (mediaType === VIDEO) return next();
        if (req.file.size > maxFileSize_cloudinary) return await Promise.reject({ error: 'El archivo excede el tamaño maximo permitido de 10.4Mb', status: 413 })
        next();
    } catch (error) {
        console.error('Ocurrio un error en middleware verifySizeFile.js().Error: ', error.message)
        next(error);
    }
=======
import { maxFileSize_cloudinary } from "../../../config/cloudinary.config.js"
import { VIDEO } from "../../../libs/fileExtensions.js";

export default async (req, res, next) => {
    try {
        const isTextContent = req.body.textContent;

        if (isTextContent) return next();

        const mediaType = req.mediaType;
        if (mediaType === VIDEO) return next();
        if (req.file.size > maxFileSize_cloudinary) return await Promise.reject({ error: 'El archivo excede el tamaño maximo permitido de 10.4Mb', status: 413 })
        next();
    } catch (error) {
        console.error('Ocurrio un error en middleware verifySizeFile.js().Error: ', error.message)
        next(error);
    }
>>>>>>> b3173dc1 (first commit in Ubuntu)
}