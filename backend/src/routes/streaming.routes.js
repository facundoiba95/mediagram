import { Router } from "express";
import { getStreaming } from "../controllers/streaming.controllers.js";

const router = Router();

router.get("/", getStreaming)

export default router;