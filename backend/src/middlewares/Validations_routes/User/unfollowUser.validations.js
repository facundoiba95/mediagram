import sanitizeObjectId from "../../Sanitize/sanitizeObjectId.js";
import idFollowUpRequestSchemaValidations from "../../Validations/User/idFollowUpRequestSchema.validations.js";
import usernameSchemaValidations from "../../Validations/User/usernameSchema.validations.js.js"

export default [
    sanitizeObjectId(["idFollowUpRequest"]),
    usernameSchemaValidations,
    idFollowUpRequestSchemaValidations
]