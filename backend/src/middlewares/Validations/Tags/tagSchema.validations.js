import { checkSchema } from "express-validator";
import { regex_text } from "../../../libs/regExs.js";

export default checkSchema({
    tag: {
        in: ["body"],
        exists: {
            errorMessage: "tag no tiene un valor!"
        },
        notEmpty: {
            errorMessage: "tag esta vacío!"
        },
        isLength: {
            options: { min: 3 }
        },
        matches: {
            options: regex_text,
            errorMessage: "tag invalid! Puede contener letras, numeros, puntos y guiones bajos."
        }
    }
})