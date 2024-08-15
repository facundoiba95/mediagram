import { checkSchema } from "express-validator";
import { objectIdSchema } from "../libs_validations.js";

export default checkSchema({
    idFollowUpRequest: {
        in: ["body"],
        exists: {
            errorMessage: "idFollowUpRequest no tiene un valor!"
        },
        notEmpty: {
            errorMessage: "idFollowUpRequest esta vacío!"
        },
        custom: {
            options: (value) => {
                if(!objectIdSchema(value)) return false;
                return true;
            },
            errorMessage: "idFollowUpRequest invalid! Debes ingresar un dato tipo ObjectId."
        }
    }
})