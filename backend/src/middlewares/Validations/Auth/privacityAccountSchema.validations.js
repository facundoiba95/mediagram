import { checkSchema } from "express-validator";

export default checkSchema({
    condition: {
        in: ["body"],
        isBoolean: {
            errorMessage: "Debes ingresar un valor Booleano."
        }
    }
})