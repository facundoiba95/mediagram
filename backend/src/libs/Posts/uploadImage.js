import cloudinary from 'cloudinary';
import { originalImage_path } from '../../config/baseUrl.js';

export const uploadImage = async (idAuth) => {
    try {
        const result_image = await cloudinary.v2.uploader.upload(originalImage_path, {
            folder: `mediagram/posts/${idAuth}`, // directorio en cloudinary
            eager: [ // miniatura - thumbnail
                { 
                    format: 'avif', 
                    width: 400, 
                    height: 400, 
                    crop: 'thumb', 
                    gravity: "center"
                }
            ]
        });

        const result_thumbnail_image = result_image.eager[0].secure_url;

        return {
            result_image, 
            result_thumbnail_image
        }
    } catch (error) {
        console.error("Ocurrio un error en uploadImage. Error: ", error);
        return error;
    }
}