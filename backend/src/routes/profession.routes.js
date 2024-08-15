// config
import { Router } from 'express';
const routes = Router();


// controllers
import { createNewProfession, getProfessionByID, getProfessions } from '../controllers/profession.controllers.js';


// middlewares validators
import { validationErrors } from '../middlewares/Validations/libs_validations.js';
import getProfessionByIDValidations from '../middlewares/Validations_routes/Profession/getProfessionByID.validations.js';
import createNewProfessionValidations from '../middlewares/Validations_routes/Profession/createNewProfession.validations.js';


// routes
routes.get('/getProfessions', getProfessions);
routes.get('/getProfessionByID', [... getProfessionByIDValidations, validationErrors], getProfessionByID);
routes.post('/createNewProfession/:name',[... createNewProfessionValidations, validationErrors], createNewProfession);

export default routes;