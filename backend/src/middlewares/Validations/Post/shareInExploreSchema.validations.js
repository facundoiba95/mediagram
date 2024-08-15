import { checkSchema } from "express-validator";

export default checkSchema({
    shareInExplore: {
        in: ["body"],
        isBoolean: {
            errorMessage: "shareInExplore debe ser un valor Booleano."
        }
    },
})