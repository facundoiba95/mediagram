import { checkSchema } from "express-validator";
import { regex_text_whitespaces } from "../../../libs/regExs.js";

export default checkSchema({
    name: {
        in: ["params"],
        isLength: {
            options: {min: 2},
            errorMessage: "name debe contener al menos 2 caracteres."
        },
        matches: {
            options: regex_text_whitespaces,
            errorMessage: "name invalid! Puede contener letras, numeros, puntos o guiones bajos."
        }
    }
})