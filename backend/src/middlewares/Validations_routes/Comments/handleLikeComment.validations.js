import sanitizeObjectId from "../../Sanitize/sanitizeObjectId.js";
import idCommentSchemaValidations from "../../Validations/Comments/idCommentSchema.validations.js";

export default [
    sanitizeObjectId(["idComment"]), 
    idCommentSchemaValidations
]