import { originalImage_path, originalVideo_path } from "../../config/baseUrl.js";
import deleteFiles from "../deleteFiles.js";
import { IMAGE, VIDEO } from "../fileExtensions.js";
import { uploadImage } from "./uploadImage.js";
import { uploadVideo } from "./uploadVideo.js";

export default async ({ newPost, mediaType, file_paths, idAuth }) => {
    try {
        if (mediaType === IMAGE) {
            const image = await uploadImage(idAuth);
            newPost.media_url = `${image.result_image.secure_url}`;
            newPost.thumbnail = `${image.result_thumbnail_image}`;
            newPost.mediaType = IMAGE;
            file_paths.push(originalImage_path);
            await deleteFiles(file_paths);
        } else if (mediaType === VIDEO) {
            const video = await uploadVideo(idAuth);
            newPost.media_url = `${video.result_video.secure_url}`;
            newPost.thumbnail = `${video.result_thumbnail_video}`;
            newPost.mediaType = VIDEO;
            file_paths.push(originalVideo_path);
            await deleteFiles(file_paths);
        }
    } catch (error) {
        console.error("Ocurrio un error al agregar contenido multimeda en Post, en addMedia.js. Error: ", error);
        return false;
    }
}