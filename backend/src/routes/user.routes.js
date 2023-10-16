import { Router } from 'express';
import { followUser, handleFollowUpRequest, handleIsFollowing, searchUser, selectUser, unfollowUser } from '../controllers/user.controllers.js';
import verifyToken from '../middlewares/auth/verifyToken.js';
import handleErrors from '../middlewares/errors/handleErrors.js';
import isExistUserFollow from '../middlewares/user/isExistUserFollow.js';
import followUpRequest from '../middlewares/user/followUpRequest.js';

const router = Router();

router.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  
router.get('/searchUser/:valueUser', searchUser);
router.post('/followUser' , [ verifyToken, isExistUserFollow, followUpRequest, handleErrors ] , followUser);
router.post('/unfollowUser',[ verifyToken, handleErrors ],  unfollowUser);
router.post('/selectUser', [ verifyToken, handleErrors ] , selectUser);
router.post('/handleIsFollowing', [ verifyToken, handleErrors ], handleIsFollowing );
router.post('/handleFollowUpRequest', [ verifyToken, isExistUserFollow ,handleErrors ], handleFollowUpRequest);

export default router;