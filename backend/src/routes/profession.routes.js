import { Router } from 'express';
import { createNewProfession, getProfessionByID, getProfessions } from '../controllers/profession.controllers.js';

const routes = Router();

routes.get('/getProfessions', getProfessions);
routes.get('/getProfessionByID', getProfessionByID);
routes.post('/createNewProfession/:name', createNewProfession);

export default routes;