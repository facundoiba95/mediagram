import { checkSchema } from "express-validator";
import { regex_text_whitespaces } from "../../../libs/regExs.js";

export default checkSchema({
    content: {
        in: ["body"],
        exists: {
            errorMessage: "content no tiene un valor!"
        },
        notEmpty: {
            errorMessage: "content esta vacio!."
        },
        custom: {
            options: (value) => {
                return regex_text_whitespaces.test(value); 
            },
            errorMessage: "Solo se aceptan letras, numeros, puntos y guiones bajos en description."
        },
        trim: true,
    },
})