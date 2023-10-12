import { Router } from "express";
import { handleLogin, handleRefreshUserAuth, handleRegister } from "../controllers/auth.controllers.js";
import verifyToken from "../middlewares/auth/verifyToken.js";
import handleErrors from "../middlewares/errors/handleErrors.js";

const router = Router();

router.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  
router.post('/login', handleLogin);
router.post('/register', handleRegister);
router.post('/refreshUserAuth', [ verifyToken, handleErrors], handleRefreshUserAuth);

export default router;