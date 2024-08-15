import sanitizeObjectId from "../../Sanitize/sanitizeObjectId.js";
import idUserSchemaValidations from "../../Validations/User/idUserSchema.validations.js";
import imgUrlSchemaValidations from "../../Validations/User/imgUrlSchema.validations.js";
import usernameSchemaValidations from "../../Validations/User/usernameSchema.validations.js.js";

export default [
    sanitizeObjectId(["_id"]),
    usernameSchemaValidations, 
    imgUrlSchemaValidations, 
    idUserSchemaValidations
]