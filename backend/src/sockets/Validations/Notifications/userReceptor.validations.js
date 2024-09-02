import { regex_text } from "../../../libs/regExs.js";

export default (data) => {
    const userReceptor = data.userReceptor;
    let validation = {
        validation: false
    }

    if(regex_text.test(userReceptor)) {
        validation.validation = true;
        return validation;
    } else {
        validation = {
            validation: false,
            field: "userReceptor",
            error: `El valor "${userReceptor}" puede contener letras, numeros, puntos o guiónes.`
        }
        return validation;
    }
}
