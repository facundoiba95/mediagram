import { Router } from 'express';
import { changeImgProfile, followUser, handleFollowUpRequest, handleIsFollowing, searchUser, selectUser, unfollowUser } from '../controllers/user.controllers.js';
import verifyToken from '../middlewares/auth/verifyToken.js';
import handleErrors from '../middlewares/errors/handleErrors.js';
import isExistUserFollow from '../middlewares/user/isExistUserFollow.js';
import followUpRequest from '../middlewares/user/followUpRequest.js';
import verifyExistImage from '../middlewares/errors/post/verifyExistImage.js';
import verifySizeFile from '../middlewares/errors/post/verifySizeFile.js';
import multer from 'multer';
import path,{ dirname } from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import cloudinary from 'cloudinary';
import { config } from "dotenv";
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
  
router.get('/searchUser/:valueUser', searchUser);
router.post('/followUser' , [ verifyToken, isExistUserFollow, followUpRequest, handleErrors ] , followUser);
router.post('/unfollowUser',[ verifyToken, handleErrors ],  unfollowUser);
router.post('/selectUser', [ verifyToken, handleErrors ] , selectUser);
router.post('/handleIsFollowing', [ verifyToken, handleErrors ], handleIsFollowing );
router.post('/handleFollowUpRequest', [ verifyToken, isExistUserFollow ,handleErrors ], handleFollowUpRequest);
router.post('/changeImgProfile', upload.single('newImgProfile') ,[ verifyToken, verifyExistImage, verifySizeFile, handleErrors ], changeImgProfile );


export default router;