import { checkSchema } from "express-validator";
import { objectIdSchema } from "../libs_validations.js";

export default checkSchema({
    idPost: {
        in: ["params"],
        exists: {
            errorMessage: "idPost no tiene un valor!"
        },
        notEmpty: {
            errorMessage: "idPost esta vacío!"
        },
        custom:{
            options: (value) => {
                if(!objectIdSchema(value)) return false;
                return true;
            },
            errorMessage: "idPost invalido! Debes ingresar un tipo de dato ObjectId."
        }
    }
})