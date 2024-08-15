import multer from "multer";
import { image_extension, video_extension } from "../libs/fileExtensions.js";

const storage = multer.memoryStorage();

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
      if (!file.originalname.match(video_extension) && !file.originalname.match(image_extension)) {
        return cb({ error: 'Formato de archivo no compatible.', status: 415 });
      }
      cb(null, true);
    }
  });

export default upload;
