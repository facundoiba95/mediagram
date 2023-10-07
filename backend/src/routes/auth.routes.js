import { Router } from "express";
import { handleLogin, handleRefreshUserAuth, handleRegister } from "../controllers/auth.controllers.js";
import verifyToken from "../middlewares/auth/verifyToken.js";
import handleErrors from "../middlewares/errors/handleErrors.js";

const router = Router();

router.post('/login', handleLogin);
router.post('/register', handleRegister);
router.post('/refreshUserAuth', [ verifyToken, handleErrors], handleRefreshUserAuth);

export default router;