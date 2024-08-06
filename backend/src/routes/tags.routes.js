<<<<<<< HEAD
import { Router } from "express";
import { createTag, getTrendTags, tagsFound } from "../controllers/tags.controllers.js";
import searchTags from "../middlewares/tags/searchTags.js";
import countPostByTags from "../middlewares/tags/countPostByTags.js";

const router = Router();

router.get('/searchTags', [searchTags, countPostByTags], tagsFound);
router.post('/createTag', createTag);
router.get('/getTrendTags', getTrendTags);

=======
import { Router } from "express";
import { createTag, getTrendTags, tagsFound } from "../controllers/tags.controllers.js";
import searchTags from "../middlewares/tags/searchTags.js";
import countPostByTags from "../middlewares/tags/countPostByTags.js";

const router = Router();

router.get('/searchTags', [searchTags, countPostByTags], tagsFound);
router.post('/createTag', createTag);
router.get('/getTrendTags', getTrendTags);

>>>>>>> b3173dc1 (first commit in Ubuntu)
export default router;