import sanitizeArray from "../../Sanitize/sanitizeArray.js";
import sanitizeBoolean from "../../Sanitize/sanitizeBoolean.js";
import sanitizeObjectId from "../../Sanitize/sanitizeObjectId.js";
import descriptionSchemaValidations from "../../Validations/Post/descriptionSchema.validations.js";
import postBySchemaValidations from "../../Validations/Post/postBySchema.validations.js";
import referToSchemaValidations from "../../Validations/Post/referToSchema.validations.js";
import shareInExploreSchemaValidations from "../../Validations/Post/shareInExploreSchema.validations.js";
import textContentSchemaValidations from "../../Validations/Post/textContentSchema.validations.js";
import typePostSchemaValidations from "../../Validations/Post/typePostSchema.validations.js";
import listTagsSchemaValidations from "../../Validations/Tags/listTagsSchema.validations.js";
import locationSchemaValidators from "../../Validations/User/locationSchema.validators.js.js";

export default [
    sanitizeArray(["tags", "referTo"]),
    sanitizeObjectId(["postBy"]),
    sanitizeBoolean(["shareInExplore"]),
    descriptionSchemaValidations,
    typePostSchemaValidations,
    locationSchemaValidators,
    referToSchemaValidations,
    listTagsSchemaValidations,
    shareInExploreSchemaValidations,
    postBySchemaValidations, 
    textContentSchemaValidations
]