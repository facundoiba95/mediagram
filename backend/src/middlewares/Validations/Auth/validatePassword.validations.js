import Joi from 'joi';
import { upperCase, lowerCase, symbol, number, whiteSpace } from "../../../libs/regExs.js";

const passwordSchema = Joi.string()
    .min(8)
    .regex(lowerCase, 'lowercase letter')
    .regex(upperCase, 'uppercase letter')
    .regex(number, 'number')
    .regex(symbol, 'special character')
    .regex(whiteSpace, 'no whitespace')
    .required()
    .messages({
        'string.min': 'La contraseña debe tener al menos 8 caracteres.',
        'string.pattern.name': 'Debes incluir una {#name}.'
    });

export default async (req, res, next) => {
    try {
        const { password } = req.body;
        const { error } = passwordSchema.validate(password);
        
        if (error) {
            return await Promise.reject({ error: error.details[0].message, status: 400 });
        }
        
        next();
    } catch (error) {
        console.error('Ocurrió un error en middleware validatePassword(). Error:', error);
        next(error);
    }
};