import { Router } from "express";
import { createTag, tagsFound } from "../controllers/tags.controllers.js";
import searchTags from "../middlewares/tags/searchTags.js";

const router = Router();

router.get('/searchTags', [searchTags], tagsFound);
router.post('/createTag', createTag);

export default router;