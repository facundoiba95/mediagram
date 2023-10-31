import { Router } from "express";
import { addComment, createPost, getPostByID, getPosts } from "../controllers/post.controllers.js";
import multer from 'multer';
import path,{ dirname } from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import cloudinary from 'cloudinary';
import { config } from "dotenv";
import verifyExistImage from "../middlewares/errors/post/verifyExistImage.js";
import verifySizeFile from "../middlewares/errors/post/verifySizeFile.js";
import { verifyUser } from "../controllers/user.controllers.js";
import getPostByFollowings from "../middlewares/posts/getPostByFollowings.js";
import validateComment from "../middlewares/posts/validateComment.js";
import validateAuthInPost from "../middlewares/posts/validateAuthInPost.js";
import handleErrors from "../middlewares/errors/handleErrors.js";
config();

const router = Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_APIKEY,
  api_secret: process.env.CLOUDINARY_APISECRET
})

const storage = multer.diskStorage({
    destination:(req,files,cb) => {
    cb(null, files = path.join(__dirname)) // guardar las imagenes en este directorio.
  },
    filename:(req,files,cb) => {
    cb(null, files.originalname); //Agregar extension de archivo de imagen.
  }
});

const upload = multer({storage: storage,
    fileFilter: (req, files, cb) => {
    if (!files.originalname.match(/\.(jpeg|gif|tif||tiff|heif|eps|ai|pdf|psd|webp|png|bmp|svg|jpg|avif|mp4|mov|gif|avi|mpeg|3gp|JPG)$/)) {
    return cb(new Error('Error en el tipo de archivo.'));
    }
    cb(null, true);
    }
});

router.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.post('/createPost', upload.single('imgPost'), [ verifyExistImage, verifySizeFile ], createPost);
router.post('/getPosts', getPosts);
router.get('/getPostByID/:idPost', getPostByID );
router.post('/verifyUser', verifyUser);
router.post('/getPostByFollowings', [ getPostByFollowings ]);
router.post('/addComment', [ validateAuthInPost, validateComment, handleErrors ] , addComment);

export default router;