import sanitizeObjectId from "../../Sanitize/sanitizeObjectId.js";
import idProfessionSchemaValidations from "../../Validations/Profession/idProfessionSchema.validations.js";

export default [
    sanitizeObjectId(["idProfession"]),
    idProfessionSchemaValidations
]