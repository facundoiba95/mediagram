import { checkSchema } from 'express-validator';
import { regex_text_whitespaces } from '../../../libs/regExs.js';

export default checkSchema({
    location: {
        in: ["body"],
        optional: true,
        custom: {
            options: (value) => {
                if (value === '') return true;
                return regex_text_whitespaces.test(value);
            },
            errorMessage: "location invalid! Puede contener letras, numeros, puntos o guiones bajos."
        }
    }
})