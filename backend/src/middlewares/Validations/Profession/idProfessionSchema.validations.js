import { checkSchema } from "express-validator";
import { objectIdSchema } from "../libs_validations.js";

export default checkSchema({
    idProfession: {
        in: ["query","params"],
        exists: {
            errorMessage:"idProfession no tiene un valor!"
        },
        notEmpty: {
            errorMessage: "idProfession esta vacío!"
        },
        custom: {
            options: (value) => {
                if (!objectIdSchema(value)) return false;
                return true;
            },
            errorMessage: "idProfession invalid! Debes ingresar un dato tipo ObjectId."
        }
    }
})