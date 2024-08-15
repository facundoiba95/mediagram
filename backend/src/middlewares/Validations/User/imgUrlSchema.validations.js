import { checkSchema } from "express-validator";

export default checkSchema({
    imgProfile: {
        in: ["body"],
        isURL: {
            errorMessage: "imgProfile invalid! No es una url valida."
        }
    }
})