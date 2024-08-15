import { checkSchema } from "express-validator";
import { objectIdSchema } from "../libs_validations.js";

export default checkSchema({    
    tags: {
        in: ["body"],
        optional: true,
        custom: {
            options: (value) => {
                if (!Array.isArray(value)) {
                    throw "tags debe ser un Array."
                }

                if (!value.length) return true;

                
                if (!value.every(tag => objectIdSchema(tag))) {
                    throw 'Todos los elementos en tags deben ser ObjectId válidos.'
                }

                return true;
            },
        }
    },
})