import sanitizeObjectId from "../../Sanitize/sanitizeObjectId.js";
import idUserSchemaValidations from "../../Validations/User/idUserSchema.validations.js";

export default [
    sanitizeObjectId(["_id"]),
    idUserSchemaValidations
]