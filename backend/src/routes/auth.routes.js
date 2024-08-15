// config
import { Router } from "express";
const router = Router();

// controllers
import { changePassword, changePrivacityOfAccount, getFollowUpRequests, handleLogin, handleRefreshUserAuth, handleRegister, updateCloseList, validateSession } from "../controllers/auth.controllers.js";


// middleware functionals
import verifyToken from "../middlewares/auth/verifyToken.js";


// middlewares validators
import { validationErrors } from "../middlewares/Validations/libs_validations.js";
import loginValidations from "../middlewares/Validations_routes/Auth/login.validations.js";
import registerValidations from "../middlewares/Validations_routes/Auth/register.validations.js";
import changePrivacityOfAccountValidations from "../middlewares/Validations_routes/Auth/changePrivacityOfAccount.validations.js";
import changePasswordValidations from "../middlewares/Validations_routes/Auth/changePassword.validations.js";
import updateCloseListValidations from "../middlewares/Validations_routes/Auth/updateCloseList.validations.js";


// cors
router.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});


// routes
router.post('/login', [...loginValidations, validationErrors], handleLogin);
router.post('/register', [...registerValidations, validationErrors], handleRegister);
router.get('/refreshUserAuth', [verifyToken], handleRefreshUserAuth);
router.post('/changePrivacityOfAccount', [...changePrivacityOfAccountValidations, validationErrors], changePrivacityOfAccount);
router.post('/changePassword', [...changePasswordValidations, validationErrors], changePassword);
router.post('/validateSession', validateSession);
router.post('/updateCloseList', [...updateCloseListValidations, validationErrors], updateCloseList);
router.get('/getFollowUpRequests', [verifyToken], getFollowUpRequests);

export default router;