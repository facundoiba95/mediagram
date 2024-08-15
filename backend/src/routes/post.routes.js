// config
import { Router } from "express";
import upload from "../config/multer_config.js";
import { config } from "dotenv";
import { cloudinary_config } from '../config/cloudinary.config.js';
const router = Router();
cloudinary_config();
config();


// controllers
import { handleLikeToPost, createPost, getPosts, getPostByID, test_getPost, deletePost, getPostsByCloseList, getPostByFollowings, visiblePosts, updateTagsInPost, getTrendPosts, getLikes, getViews, test_getPostWithCommentAndUser } from "../controllers/post.controllers.js";


// middlewares validators
import { validationErrors } from "../middlewares/Validations/libs_validations.js";
import createPostValidations from "../middlewares/Validations_routes/Post/createPost.validations.js";
import getPostsValidations from "../middlewares/Validations_routes/Post/getPosts.validations.js";
import getPostByIDValidations from "../middlewares/Validations_routes/Post/getPostByID.validations.js";
import handleLikePostValidations from "../middlewares/Validations_routes/Post/handleLikePost.validations.js";
import getLikesValidations from "../middlewares/Validations_routes/Post/getLikes.validations.js";
import getViewsValidations from "../middlewares/Validations_routes/Post/getViews.validations.js";
import deletePostValidations from "../middlewares/Validations_routes/Post/deletePost.validations.js";
import updateTagsValidations from "../middlewares/Validations_routes/Post/updateTags.validations.js";
import visiblePostsValidations from "../middlewares/Validations_routes/Post/visiblePosts.validations.js";


// middlewares functionals
import verifySizeFile from "../middlewares/errors/post/verifySizeFile.js";
import validateAuthInPost from "../middlewares/posts/validateAuthInPost.js";
import isExistLikeInPost from "../middlewares/posts/isExistLikeInPost.js";
import addViewInPost from "../middlewares/posts/addViewInPost.js";
import associatePostAndUser from "../middlewares/posts/associatePostAndUser.js";
import isPrivate from "../middlewares/posts/isPrivate.js";
import postByFollowings from "../middlewares/posts/postByFollowings.js";
import isPrivateProfile from "../middlewares/user/isPrivateProfile.js";
import searchTags from "../middlewares/tags/searchTags.js";
import associateTagsByPosts from "../middlewares/posts/associateTagsByPosts.js";
import select_mediaType from "../middlewares/posts/select_mediaType.js";
import convertImage from "../middlewares/posts/convertImage.js";
import convertVideo from "../middlewares/posts/convertVideo.js";
import { postWithCommentAndUser } from "../middlewares/posts/postsWithCommentsAndUsers.js";


// cors
router.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});


// routes
router.post('/createPost', upload.single("mediaFile"), [select_mediaType, verifySizeFile, ...createPostValidations, validationErrors, convertImage, convertVideo], createPost);
router.post('/getPosts', [...getPostsValidations, validationErrors, isPrivateProfile], getPosts);
router.get('/getPostByID/:idPost', [...getPostByIDValidations, validationErrors, associatePostAndUser, isPrivate, addViewInPost], getPostByID);
router.post('/getPostByFollowings', [postByFollowings], getPostByFollowings);
router.post('/getPostsByCloseList', [postByFollowings], getPostsByCloseList);
router.post('/handleLikeToPost/:idPost', [validateAuthInPost, ...handleLikePostValidations, validationErrors, isExistLikeInPost], handleLikeToPost);
router.get('/getPost/:idPost', test_getPost);
router.get('/getLikes/:idPost', [...getLikesValidations, validationErrors], getLikes)
router.get('/getViews/:idPost', [...getViewsValidations, validationErrors], getViews)
router.delete('/deletePost/:idPost', [...deletePostValidations, validationErrors], deletePost);
router.put('/updateTags/:idPost', [...updateTagsValidations, validationErrors], updateTagsInPost);
router.get('/visiblePosts', [...visiblePostsValidations, validationErrors, searchTags, associateTagsByPosts], visiblePosts);
router.get('/getTrendPosts', getTrendPosts);

router.post('/test_getPostWithCommentAndUser/:idPost', postWithCommentAndUser);
router.get("/test/:username", test_getPost);

export default router;