import { Router } from "express";
import { indexRoute } from "../controllers/index.controllers.js";

const router = Router();

router.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

router.get('/', indexRoute);

export default router;