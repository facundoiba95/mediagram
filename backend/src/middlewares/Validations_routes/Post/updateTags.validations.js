import sanitizeObjectId from "../../Sanitize/sanitizeObjectId.js";
import idPostSchemaValidations from "../../Validations/Post/idPostSchema.validations.js";
import listTagsSchemaValidations from "../../Validations/Tags/listTagsSchema.validations.js";

export default [
    sanitizeObjectId(["idPost"]),
    idPostSchemaValidations, 
    listTagsSchemaValidations
]