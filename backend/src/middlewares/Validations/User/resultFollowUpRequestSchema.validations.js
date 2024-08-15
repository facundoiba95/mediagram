import { checkSchema } from "express-validator";
import { ACCEPT_ID, REJECT_ID } from "../../../controllers/user.controllers.js";

export default checkSchema({
    followUpRequestResult: {
        in: ["body"],
        exists: {
            errorMessage: "followUpRequestResult no tiene un valor!"
        },
        notEmpty: {
            errorMessage: "followUpRequestResult esta vacío!"
        },
        custom: {
            options: (value) => {
                if(value !== ACCEPT_ID || value !== REJECT_ID) return false;
                return true;
            },
            errorMessage: "followUpRequestResult invalid! La respuesta a la solicitud de seguimiento no es valida."
        }
    }
})