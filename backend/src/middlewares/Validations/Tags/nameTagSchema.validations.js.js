import { checkSchema } from "express-validator";
import { regex_text } from "../../../libs/regExs.js";

export default checkSchema({
    nameTag: {
        in: ["query"],
        exists: {
            errorMessage: "nameTag no tiene un valor!"
        },
        notEmpty: {
            errorMessage: "nameTag esta vacío!"
        },
        matches: {
            options: regex_text,
            errorMessage: "nameTag invalido! Puede contener letras, numeros, puntos o guiones bajos"
        }
    }
})