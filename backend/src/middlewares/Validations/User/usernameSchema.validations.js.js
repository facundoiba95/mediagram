import { checkSchema } from "express-validator";
import { regex_text } from "../../../libs/regExs.js";

export default checkSchema({
    username: {
        in: ["body"],
        isLength: {
            options: {min: 4},
            errorMessage: "El nombre de usuario debe contener al menos 4 caracteres."
        },
        exists: {
            errorMessage: "No ingresaste un valor para 'username'"
        },
        notEmpty: {
            errorMessage: "El valor para 'username' no puede estar vacío."
        },
        matches: {
            options: regex_text,
            errorMessage: "Solo se permiten letras, numeros, guiones bajos y puntos."
        },
        trim: true,
    }
})