import { checkSchema } from "express-validator";
import { objectIdSchema } from "../libs_validations.js";

export default checkSchema({
    _id: {
        in: ["body"],
        exists: {
            errorMessage: "_id no tiene un valor!"
        },
        notEmpty: {
            errorMessage: "_id esta vacío!"
        },
        custom: {
            options: (value) => {
                if(!objectIdSchema(value)) return false;
                return true;
            },
            errorMessage: "_id invalid! Debe ser un dato tipo ObjectId"
        }
    }
})