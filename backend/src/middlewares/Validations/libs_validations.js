import { validationResult } from "express-validator";
import mongoose from "mongoose";

export const objectIdSchema = (value) => mongoose.Types.ObjectId.isValid(value);

// @params errors = validationResult(req) => express-validator
const messageValidation = (errors) => {
    
    const validationErrors = errors.array().map(err => ({
        message: err.msg,
        fail: err.path,
        valueRecived: err.value
    }));

    return Promise.reject({ error: validationErrors, status: 400 });
}

export async function validationErrors(req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return await messageValidation(errors);
        }

        next();
    } catch (error) {
        console.error('Ocurrió un error en la validación de datos, en validationErrors(). Error:', error);
        next(error);
    }
};