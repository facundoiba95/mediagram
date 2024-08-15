import { checkSchema } from 'express-validator';
import { lowerCase, upperCase, symbol, number, whiteSpace } from '../../../libs/regExs.js';

export default checkSchema({
    password: {
        in: ["body"],
        trim: true,
        isLength: {
            options: { min: 8 },
            errorMessage: "La contraseña debe tener al menos 8 caracteres."
        },
        custom: {
            options: (value) => {
                if (!lowerCase.test(value)) {
                    throw new Error("La contraseña debe contener al menos una letra minúscula.");
                }
                if (!upperCase.test(value)) {
                    throw new Error("La contraseña debe contener al menos una letra mayúscula.");
                }
                if (!symbol.test(value)) {
                    throw new Error("La contraseña debe contener al menos un punto o guión bajo.");
                }
                if (!number.test(value)) {
                    throw new Error("La contraseña debe contener al menos un número.");
                }
                if (whiteSpace.test(value)) {
                    throw new Error("La contraseña no debe contener espacios en blanco.");
                }
                return true;
            }
        }
    }
});