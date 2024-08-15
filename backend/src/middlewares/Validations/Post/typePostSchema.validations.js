import { checkSchema } from "express-validator";

export default checkSchema({
    typePost: {
        in: ["body"],
        isIn: {
            options: [["POST", "FASTPOST", "EXCLUIVE_POST"]],
            errorMessage: "typePost invalido! Solo puede ser POST, FASTPOST o EXCLUSIVEPOST"
        }
    }
})