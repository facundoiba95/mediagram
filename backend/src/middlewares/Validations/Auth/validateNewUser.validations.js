<<<<<<< HEAD
import { whiteSpace } from "../../../libs/regExs.js";
import Joi from 'joi';

const emailSchema = Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
        'string.empty': 'Debes ingresar un email.',
        'string.email': 'Debes ingresar un email válido.'
    });

const usernameSchema = Joi.string()
    .min(4)
    .regex(whiteSpace, 'no whitespace')
    .required()
    .messages({
        'string.min': 'El nombre de usuario debe tener al menos 4 caracteres.',
        'string.pattern.name': 'No puedes incluir espacios.'
    });

const schema = Joi.object({
    username: usernameSchema,
    email: emailSchema
});

export default async (req, res, next) => {
    try {
        const { username, email } = req.body;

        const { error } = schema.validate({ username, email }, { abortEarly: false });

        if (error) {
            const validationErrors = error.details.map(err => ({
                message: err.message,
                fail: err.context.label
            }));
            return await Promise.reject({ error: validationErrors, status: 400 })
        }

        next();
    } catch (error) {
        console.error('Ocurrió un error en middleware validateNewUser.validations.js. Error:', error);
        next(error);
    }
=======
import { whiteSpace } from "../../../libs/regExs.js";
import Joi from 'joi';

const emailSchema = Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
        'string.empty': 'Debes ingresar un email.',
        'string.email': 'Debes ingresar un email válido.'
    });

const usernameSchema = Joi.string()
    .min(4)
    .regex(whiteSpace, 'no whitespace')
    .required()
    .messages({
        'string.min': 'El nombre de usuario debe tener al menos 4 caracteres.',
        'string.pattern.name': 'No puedes incluir espacios.'
    });

const schema = Joi.object({
    username: usernameSchema,
    email: emailSchema
});

export default async (req, res, next) => {
    try {
        const { username, email } = req.body;

        const { error } = schema.validate({ username, email }, { abortEarly: false });

        if (error) {
            const validationErrors = error.details.map(err => ({
                message: err.message,
                fail: err.context.label
            }));
            return await Promise.reject({ error: validationErrors, status: 400 })
        }

        next();
    } catch (error) {
        console.error('Ocurrió un error en middleware validateNewUser.validations.js. Error:', error);
        next(error);
    }
>>>>>>> b3173dc1 (first commit in Ubuntu)
};