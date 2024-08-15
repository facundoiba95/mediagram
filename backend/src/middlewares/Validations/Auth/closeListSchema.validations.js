import { checkSchema } from "express-validator"
import { objectIdSchema } from "../libs_validations.js"

export default checkSchema({
    closeList: {
        in: ['body'],
        isArray: {
            errorMessage: 'closeList debe ser un array.'
        },
        custom: {
            options: (value) => {
                if (!Array.isArray(value)) return false;
                return value.every(usr => objectIdSchema(usr));
            },
            errorMessage: 'Todos los elementos en closeList deben ser ObjectId válidos.'
        }
    }
});