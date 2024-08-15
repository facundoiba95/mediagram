import sanitizeObjectId from "../../Sanitize/sanitizeObjectId.js";
import idFollowUpRequestSchemaValidations from "../../Validations/User/idFollowUpRequestSchema.validations.js";
import resultFollowUpRequestSchemaValidations from "../../Validations/User/resultFollowUpRequestSchema.validations.js";

export default [
    sanitizeObjectId(["idFollowUpRequest"]),
    idFollowUpRequestSchemaValidations, 
    resultFollowUpRequestSchemaValidations
]