import { checkSchema } from "express-validator";
import { objectIdSchema } from "../libs_validations.js";

export default checkSchema({
    idComment: {
        in: ["params"],
        custom: {
            options: (value) => {
                if (!objectIdSchema(value)) return false;
                return true;
            },
            errorMessage: "idComment invalido! Debes ingresar un dato tipó ObjectId."
        }
    }
})