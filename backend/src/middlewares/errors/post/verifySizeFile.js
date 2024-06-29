import { maxFileSize_cloudinary } from "../../../config/cloudinary.config.js"

export default async (req,res,next) => {

    try {
        if(req.file.size > maxFileSize_cloudinary) return await Promise.reject({ error: 'El archivo excede el tamaño maximo permitido de 10.4Mb', status: 413 })
        next();
    } catch (error) {
        console.error('Ocurrio un error en middleware verifySizeFile.js().Error: ',error.message)
        next(error);
    }
}