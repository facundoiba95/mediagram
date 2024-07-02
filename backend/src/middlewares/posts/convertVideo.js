import { IMAGE, video_extension } from "../../libs/fileExtensions.js";
import ffmpegStatic from "ffmpeg-static";
import ffmpeg from "fluent-ffmpeg";
import { createReadStream } from "streamifier";
import { originalVideo_path } from "../../config/baseUrl.js";

ffmpeg.setFfmpegPath(ffmpegStatic);

export default async (req, res, next) => {
    try {
        const mediaType = req.mediaType;

        if (mediaType === IMAGE) return next();

        const inputVideoStream = createReadStream(req.file.buffer);
        const videoFile_extension = `${req.file.originalname.match(video_extension)[1]}`;

        ffmpeg(inputVideoStream)
            .inputFormat(videoFile_extension)
            .videoCodec("libx264")
            .outputOptions('-ab', '320k')
            .outputOptions('-crf 35')  // 0 es minima compresion, 51 es maxima compresion
            .outputOptions('-preset fast') // velocidad de compresion
            .save(originalVideo_path)
            .on('end', () => {
                console.log('Video convertido correctamente!');
                next()
            })
            .on('error', (error) => {
                console.error('Error al comprimir el video:', error);
                throw new Error({ error: error.message, status: 500 });
            });
    } catch (error) {
        console.error("Ocurrió un error en uploadController. Error: ", error.message);
        next(error);
    }
}