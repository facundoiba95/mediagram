import { checkSchema } from "express-validator";
import { regex_text_whitespaces } from "../../../libs/regExs.js";

export default checkSchema({
    description: {
        in: ["body"],
        optional: true,
        isLength: {
            options: { max: 255 },
            errorMessage: "La descripcion no debe pasar los 255 caracteres."
        },
        custom: {
            options: (value) => {
                if (value === '') return true; 
                return regex_text_whitespaces.test(value); 
            },
            errorMessage: "Solo se aceptan letras, numeros, puntos y guiones bajos en description."
        },
        trim: true
    }
})