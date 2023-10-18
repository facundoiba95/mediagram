import { Router } from "express";
import { changePassword, changePrivacityOfAccount, handleLogin, handleRefreshUserAuth, handleRegister } from "../controllers/auth.controllers.js";
import verifyToken from "../middlewares/auth/verifyToken.js";
import handleErrors from "../middlewares/errors/handleErrors.js";
import validatePassword from "../middlewares/auth/validatePassword.js";

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
router.post('/changePrivacityOfAccount', [ verifyToken, handleErrors ], changePrivacityOfAccount );
router.post('/changePassword', [ verifyToken, validatePassword , handleErrors ], changePassword);

export default router;