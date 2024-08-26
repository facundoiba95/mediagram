// config
import { Router } from "express";
const router = Router();


// controllers
import { addComment, handleLikeComment } from "../controllers/comment.controllers.js";


// middlewares functionals
import validateAuthInPost from "../middlewares/posts/validateAuthInPost.js";
import isExistLikeInComment from "../middlewares/posts/isExistLikeInComment.js";


// middlewares validators
import { validationErrors } from "../middlewares/Validations/libs_validations.js";
import handleLikeCommentValidations from "../middlewares/Validations_routes/Comments/handleLikeComment.validations.js";
import addCommentValidations from "../middlewares/Validations_routes/Comments/addComment.validations.js";


// routes
router.post('/handleLikeComment/:idComment', [...handleLikeCommentValidations, validationErrors, isExistLikeInComment], handleLikeComment);
router.post('/addComment', [validateAuthInPost, ... addCommentValidations, validationErrors], addComment);

export default router;