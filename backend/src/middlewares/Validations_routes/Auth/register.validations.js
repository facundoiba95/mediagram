import emailSchemaValidations from "../../Validations/Auth/emailSchema.validations.js";
import passwordSchemaValidations from "../../Validations/Auth/passwordSchema.validations.js";
import usernameSchemaValidations from "../../Validations/User/usernameSchema.validations.js.js";

export default [
    usernameSchemaValidations, 
    passwordSchemaValidations, 
    emailSchemaValidations
]