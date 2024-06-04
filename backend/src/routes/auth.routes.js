import { Router } from "express";
import { changePassword, changePrivacityOfAccount, handleLogin, handleRefreshUserAuth, handleRegister, updateCloseList, validateSession } from "../controllers/auth.controllers.js";
import validatePassword from "../middlewares/auth/validatePassword.js";
import validateInputs from "../middlewares/auth/validateInputs.js";

const router = Router();

router.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

router.post('/login', handleLogin);
router.post('/register', [ validateInputs ], handleRegister);
router.post('/refreshUserAuth', handleRefreshUserAuth);
router.post('/changePrivacityOfAccount', changePrivacityOfAccount );
router.post('/changePassword', [ validatePassword ], changePassword);
router.post('/validateSession', validateSession );
router.post('/updateCloseList', updateCloseList);

export default router;