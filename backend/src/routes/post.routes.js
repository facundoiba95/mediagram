import { Router } from "express";
import { addComment, handleLikeToPost, createPost, getPosts, getPostByID, test_getPost, deletePost, getPostsByCloseList, getPostByFollowings, visiblePosts, updateTagsInPost, getTrendPosts } from "../controllers/post.controllers.js";
import multer from 'multer';
import { config } from "dotenv";
import verifyExistImage from "../middlewares/errors/post/verifyExistImage.js";
import verifySizeFile from "../middlewares/errors/post/verifySizeFile.js";
import validateComment from "../middlewares/posts/validateComment.js";
import validateAuthInPost from "../middlewares/posts/validateAuthInPost.js";
import handleErrors from "../middlewares/errors/handleErrors.js";
import isExistLikeInPost from "../middlewares/posts/isExistLikeInPost.js";
import addViewInPost from "../middlewares/posts/addViewInPost.js";
import associatePostAndUser from "../middlewares/posts/associatePostAndUser.js";
import isPrivate from "../middlewares/posts/isPrivate.js";
import postByFollowings from "../middlewares/posts/postByFollowings.js";
import isPrivateProfile from "../middlewares/user/isPrivateProfile.js";
import searchTags from "../middlewares/tags/searchTags.js";
import associateTagsByPosts from "../middlewares/posts/associateTagsByPosts.js";
import { cloudinary_config } from '../config/cloudinary.config.js';
import select_mediaType from "../middlewares/posts/select_mediaType.js";
import convertImage from "../middlewares/posts/convertImage.js";
import convertVideo from "../middlewares/posts/convertVideo.js";
import { image_extension, video_extension } from "../libs/fileExtensions.js";

config();

const router = Router();

cloudinary_config();

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


router.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});


router.post('/createPost', upload.single("mediaFile"), [select_mediaType, verifyExistImage, verifySizeFile , convertImage, convertVideo ], createPost);
router.post('/getPosts', [isPrivateProfile], getPosts);
router.get('/getPostByID/:idPost', [associatePostAndUser, isPrivate, addViewInPost], getPostByID);
router.post('/getPostByFollowings', [postByFollowings], getPostByFollowings);
router.post('/getPostsByCloseList', [postByFollowings], getPostsByCloseList);
router.post('/addComment', [validateAuthInPost, validateComment, handleErrors], addComment);
router.post('/handleLikeToPost', [validateAuthInPost, isExistLikeInPost, handleErrors], handleLikeToPost);
router.get('/getPost/:idPost', test_getPost);
router.delete('/deletePost/:idPost', deletePost);
router.put('/updateTags/:idPost', updateTagsInPost);
router.get('/visiblePosts', [searchTags, associateTagsByPosts], visiblePosts);
router.get('/getTrendPosts', getTrendPosts);

export default router;