import sharp from 'sharp';
import { originalImage_path } from '../config/baseUrl.js';

export default async (req, res, next) => {
    try {
        await sharp(req.file.buffer)
            .toFormat('heif', { quality: 80, compression: 'av1' })
            .toFile(originalImage_path);

        console.log('IMAGEN CONVERTIDA')
        next()
    } catch (error) {
        console.error("Error al convertir la imagen. Error: ", error.message);
        return next({ error: `Error al convertir la imagen. \n Detalle: "${error.message}".`, status: 500 });
    }
}