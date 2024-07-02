import { VIDEO } from '../../libs/fileExtensions.js';  
import sharp from 'sharp';
import { originalImage_path } from "../../config/baseUrl.js";

export default async (req, res, next) => {
    try {
        const mediaType = req.mediaType;
        
        if(mediaType === VIDEO) return next();

        await sharp(req.file.buffer)
            .toFormat('heif', { quality: 80, compression: 'av1' })
            .toFile(originalImage_path);

        console.log('Imagen convertida correctamente!')
        next()
    } catch (error) {
        console.error("Error al convertir la imagen. Error: ", error.message);
        return next({ error: `Error al convertir la imagen. \n Detalle: "${error.message}".`, status: 500 });
    }
}