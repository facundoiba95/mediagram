import { Router } from 'express';
import { changeImgProfile, followUser, handleFollowUpRequest, handleIsFollowing, searchUser, selectUser, getCloseList, unfollowUser, verifyUser, getTrendUsers, getFollowers, getFollowings } from '../controllers/user.controllers.js';
import isExistUserFollow from '../middlewares/user/isExistUserFollow.js';
import followUpRequest from '../middlewares/user/followUpRequest.js';
import verifyExistImage from '../middlewares/errors/post/verifyExistImage.js';
import verifySizeFile from '../middlewares/errors/post/verifySizeFile.js';
import multer from 'multer';
import { config } from "dotenv";
import isPrivateProfile from '../middlewares/user/isPrivateProfile.js';
import filterPost_closeList from '../middlewares/posts/filterPost_closeList.js';
import { cloudinary_config } from '../config/cloudinary.config.js';
import convertImage from '../middlewares/posts/convertImage.js';
import { image_extension } from '../libs/fileExtensions.js';
import verifyToken from '../middlewares/auth/verifyToken.js';
config();

const router = Router();

cloudinary_config();

const storage = multer.memoryStorage();

const upload = multer({storage: storage,
    fileFilter: (req, files, cb) => {
    if (!files.originalname.match(image_extension)) {
    return cb({ error: 'Formato de archivo no compatible.', status: 415 });
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
router.post('/followUser' , [ isExistUserFollow, followUpRequest ] , followUser);
router.post('/unfollowUser', unfollowUser);
router.post('/selectUser',[ isPrivateProfile, filterPost_closeList ], selectUser);
router.post('/handleIsFollowing/:idUser', handleIsFollowing );
router.post('/handleFollowUpRequest', [ isExistUserFollow ], handleFollowUpRequest);
router.post('/changeImgProfile', upload.single('newImgProfile') ,[ verifyExistImage, verifySizeFile, convertImage], changeImgProfile );
router.post('/getCloseList', getCloseList);
router.post('/verifyUser', [isPrivateProfile], verifyUser);
router.get('/getTrendUsers', getTrendUsers);
router.get('/getFollowers/:username', [verifyToken, isPrivateProfile], getFollowers);
router.get('/getFollowings/:username', [verifyToken, isPrivateProfile], getFollowings);

export default router;