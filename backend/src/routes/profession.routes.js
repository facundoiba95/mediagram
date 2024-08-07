<<<<<<< HEAD
import { Router } from 'express';
import { createNewProfession, getProfessionByID, getProfessions } from '../controllers/profession.controllers.js';

const routes = Router();

routes.get('/getProfessions', getProfessions);
routes.get('/getProfessionByID', getProfessionByID);
routes.post('/createNewProfession/:name', createNewProfession);

=======
import { Router } from 'express';
import { createNewProfession, getProfessionByID, getProfessions } from '../controllers/profession.controllers.js';

const routes = Router();

routes.get('/getProfessions', getProfessions);
routes.get('/getProfessionByID', getProfessionByID);
routes.post('/createNewProfession/:name', createNewProfession);

>>>>>>> b3173dc1 (first commit in Ubuntu)
export default routes;