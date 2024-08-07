import { Router } from "express";
import { addComment, handleLikeComment } from "../controllers/comment.controllers.js";
import validateAuthInPost from "../middlewares/posts/validateAuthInPost.js";
import validateComment from "../middlewares/posts/validateComment.js";
import handleErrors from "../middlewares/errors/handleErrors.js";

const router = Router();

router.post('/handleLikeComment/:idComment', handleLikeComment);
router.post('/addComment', [validateAuthInPost, validateComment, handleErrors], addComment);

export default router;