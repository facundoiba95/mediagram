import { Router } from "express";
import { addNewLocation, changePassword, changePrivacityOfAccount, getFollowUpRequests, handleLogin, handleRefreshUserAuth, handleRegister, updateCloseList, validateSession } from "../controllers/auth.controllers.js";
import validateAddNewLocation from "../middlewares/Validations/Auth/addNewLocation.validators.js";
import validatePasswordValidations from "../middlewares/Validations/Auth/validatePassword.validations.js";
import validateNewUserValidations from "../middlewares/Validations/Auth/validateNewUser.validations.js";

const router = Router();

router.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

router.post('/login', handleLogin);
router.post('/register', [ validateNewUserValidations, validatePasswordValidations ], handleRegister);
router.post('/refreshUserAuth', handleRefreshUserAuth);
router.post('/changePrivacityOfAccount', changePrivacityOfAccount );
router.post('/changePassword', [ validatePasswordValidations ], changePassword);
router.post('/validateSession', validateSession );
router.post('/updateCloseList', updateCloseList);
router.post('/getFollowUpRequests', getFollowUpRequests);
router.post('/addNewLocation', [ validateAddNewLocation ], addNewLocation);

export default router;