import sanitizeObjectId from "../../Sanitize/sanitizeObjectId.js";
import commentSchemaValidations from "../../Validations/Comments/commentSchema.validations.js";
import idPostSchemaValidations from "../../Validations/Post/idPostSchema.validations.js";
import postBySchemaValidations from "../../Validations/Post/postBySchema.validations.js";

export default [
    sanitizeObjectId(["postBy", "idPost"]), 
    commentSchemaValidations, 
    postBySchemaValidations, 
    idPostSchemaValidations
]