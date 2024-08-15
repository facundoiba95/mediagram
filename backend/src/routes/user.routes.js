// config
import { Router } from 'express';
import { config } from "dotenv";
import { cloudinary_config } from '../config/cloudinary.config.js';
import upload from '../config/multer_config.js';
cloudinary_config();
config();
const router = Router();


// controllers
import { changeImgProfile, followUser, handleFollowUpRequest, handleIsFollowing, searchUser, selectUser, getCloseList, unfollowUser, getTrendUsers, getFollowers, getFollowings, addNewLocation, updateProfession, refreshUser } from '../controllers/user.controllers.js';


// middlewares functionals
import isExistUserFollow from '../middlewares/user/isExistUserFollow.js';
import followUpRequest from '../middlewares/user/followUpRequest.js';
import verifyExistImage from '../middlewares/errors/post/verifyExistImage.js';
import verifySizeFile from '../middlewares/errors/post/verifySizeFile.js';
import isPrivateProfile from '../middlewares/user/isPrivateProfile.js';
import filterPost_closeList from '../middlewares/posts/filterPost_closeList.js';
import convertImage from '../middlewares/posts/convertImage.js';
import verifyToken from '../middlewares/auth/verifyToken.js';


// middlewares validators
import { validationErrors } from '../middlewares/Validations/libs_validations.js';
import searchUserValidations from '../middlewares/Validations_routes/User/searchUser.validations.js';
import followUserValidations from '../middlewares/Validations_routes/User/followUser.validations.js';
import unfollowUserValidations from '../middlewares/Validations_routes/User/unfollowUser.validations.js';
import selectUserValidations from '../middlewares/Validations_routes/User/selectUser.validations.js';
import handleIsFollowingValidations from '../middlewares/Validations_routes/User/handleIsFollowing.validations.js';
import handleFollowUpRequestValidations from '../middlewares/Validations_routes/User/handleFollowUpRequest.validations.js';
import getFollowersValidations from '../middlewares/Validations_routes/User/getFollowers.validations.js';
import getFollowingsValidations from '../middlewares/Validations_routes/User/getFollowings.validations.js';
import addNewLocationValidations from '../middlewares/Validations_routes/User/addNewLocation.validations.js';
import updateProfessionValidations from '../middlewares/Validations_routes/User/updateProfession.validations.js';
import refreshUserValidations from '../middlewares/Validations_routes/User/refreshUser.validations.js';


// cors
router.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});


// routes
router.get('/searchUser/:username', [...searchUserValidations, validationErrors], searchUser);
router.post('/followUser', [...followUserValidations, validationErrors, isExistUserFollow, followUpRequest], followUser);
router.post('/unfollowUser', [...unfollowUserValidations, validationErrors], unfollowUser);
router.post('/selectUser', [...selectUserValidations, validationErrors, isPrivateProfile, filterPost_closeList], selectUser);
router.get('/handleIsFollowing/:_id', [verifyToken, ...handleIsFollowingValidations, validationErrors], handleIsFollowing);
router.post('/handleFollowUpRequest', [...handleFollowUpRequestValidations, validationErrors, isExistUserFollow], handleFollowUpRequest);
router.post('/changeImgProfile', upload.single('newImgProfile'), [verifyExistImage, verifySizeFile, convertImage], changeImgProfile);
router.get('/getCloseList', [verifyToken], getCloseList);
router.get('/refreshUser/:username', [verifyToken, ...refreshUserValidations, validationErrors, isPrivateProfile], refreshUser);
router.get('/getTrendUsers', getTrendUsers);
router.get('/getFollowers/:username', [...getFollowersValidations, validationErrors, verifyToken, isPrivateProfile], getFollowers);
router.get('/getFollowings/:username', [...getFollowingsValidations, validationErrors, verifyToken, isPrivateProfile], getFollowings);
router.post('/addNewLocation', [...addNewLocationValidations, validationErrors], addNewLocation);
router.post('/updateProfession/:idProfession', [...updateProfessionValidations, validationErrors], updateProfession);

export default router;