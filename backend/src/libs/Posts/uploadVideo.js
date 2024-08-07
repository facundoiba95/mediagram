<<<<<<< HEAD
import cloudinary from 'cloudinary';
import { originalVideo_path } from '../../config/baseUrl.js';

export const uploadVideo = async (idAuth) => {
    try {
        const result_video = await cloudinary.v2.uploader.upload(originalVideo_path,
            {
                folder: `mediagram/posts/${idAuth}`, // directorio en cloudinary
                resource_type: "video",
                eager: [ // miniatura - thumbnail
                    { 
                        format: 'avif', 
                        width: 400, 
                        height: 400, 
                        crop: 'thumb', 
                        start_offset: '1',
                        gravity: "center"
                    }
                ]
            }
        )

        const result_thumbnail_video = result_video.eager[0].secure_url;

        return {
            result_video,
            result_thumbnail_video
        }
    } catch (error) {
        console.error("Ocurrió un error en uploadVideo. Error: ", error);
        return error;
    }
=======
import cloudinary from 'cloudinary';
import { originalVideo_path } from '../../config/baseUrl.js';

export const uploadVideo = async (idAuth) => {
    try {
        const result_video = await cloudinary.v2.uploader.upload(originalVideo_path,
            {
                folder: `mediagram/posts/${idAuth}`, // directorio en cloudinary
                resource_type: "video",
                eager: [ // miniatura - thumbnail
                    { 
                        format: 'avif', 
                        width: 400, 
                        height: 400, 
                        crop: 'thumb', 
                        start_offset: '1',
                        gravity: "center"
                    }
                ]
            }
        )

        const result_thumbnail_video = result_video.eager[0].secure_url;

        return {
            result_video,
            result_thumbnail_video
        }
    } catch (error) {
        console.error("Ocurrió un error en uploadVideo. Error: ", error);
        return error;
    }
>>>>>>> b3173dc1 (first commit in Ubuntu)
}