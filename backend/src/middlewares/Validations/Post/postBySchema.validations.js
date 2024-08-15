import { checkSchema } from "express-validator";
import { objectIdSchema } from "../libs_validations.js";

export default checkSchema({
    postBy: {
        in: ["body"],
        exists: {
            errorMessage: "postBy no tiene un valor!"
        },
        notEmpty: {
            errorMessage: "postBy esta vacío!"
        },
        custom: {
            options: (value) => {
                if(!objectIdSchema(value)) return false;
                return true;
            },
            errorMessage: "postBy invalido! Debe ser un dato tipo ObjectId!"
        }
    }
})