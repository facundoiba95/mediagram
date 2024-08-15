import { checkSchema } from "express-validator";
import { regex_text_whitespaces } from "../../../libs/regExs.js";

export default checkSchema({
    textContent: {
        in: ["body"],
        optional: true,
        trim: true,
        custom: {
            options: (value) => {
                if (value === '') return true; 
                return regex_text_whitespaces.test(value); 
            },
            errorMessage: "Solo se aceptan letras, numeros, puntos y guiones bajos en description."
        }
    }
})