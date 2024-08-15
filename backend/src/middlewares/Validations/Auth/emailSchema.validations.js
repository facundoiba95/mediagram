import { checkSchema } from "express-validator";

export default checkSchema({
    email: {
        in: ["body"],
        trim: true,
        isEmail: {
            errorMessage: "Debes ingresar un email valido."
        }    
    }
})