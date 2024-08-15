// config
import { Router } from "express";
const router = Router();


// controllers
import { createTag, getTrendTags, tagsFound } from "../controllers/tags.controllers.js";


// middlewares functionals
import searchTags from "../middlewares/tags/searchTags.js";
import countPostByTags from "../middlewares/tags/countPostByTags.js";


// middlewares validators
import { validationErrors } from "../middlewares/Validations/libs_validations.js";
import searchTagsValidations from "../middlewares/Validations_routes/Tags/searchTags.validations.js";
import createTagValidations from "../middlewares/Validations_routes/Tags/createTag.validations.js";


// routes
router.get('/searchTags', [... searchTagsValidations, validationErrors, searchTags, countPostByTags], tagsFound);
router.post('/createTag', [... createTagValidations, validationErrors], createTag);
router.get('/getTrendTags', getTrendTags);

export default router;