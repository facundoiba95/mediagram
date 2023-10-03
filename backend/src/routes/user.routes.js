import { Router } from 'express';
import { searchUser } from '../controllers/user.controllers.js';

const router = Router();

router.get('/searchUser/:valueUser', searchUser)

export default router;