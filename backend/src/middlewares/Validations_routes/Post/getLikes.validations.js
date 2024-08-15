import sanitizeObjectId from "../../Sanitize/sanitizeObjectId.js";
import idPostSchemaValidations from "../../Validations/Post/idPostSchema.validations.js";

export default [
    sanitizeObjectId(["idPost"]),
    idPostSchemaValidations
]