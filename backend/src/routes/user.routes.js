import { Router } from 'express';
import { followUser, searchUser, unfollowUser } from '../controllers/user.controllers.js';
import verifyToken from '../middlewares/auth/verifyToken.js';
import handleErrors from '../middlewares/errors/handleErrors.js';
import isExistUserFollow from '../middlewares/user/isExistUserFollow.js';

const router = Router();

router.get('/searchUser/:valueUser', searchUser);
router.post('/followUser' , [ verifyToken, isExistUserFollow ,handleErrors ] , followUser);
router.post('/unfollowUser',[ verifyToken, handleErrors ],  unfollowUser);

export default router;