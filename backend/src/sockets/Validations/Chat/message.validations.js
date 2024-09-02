import { regex_text_whitespaces } from "../../../libs/regExs.js"

export default (data) => {
    let validation = {
        validation: false
    }

    const message = data.message;

    if(regex_text_whitespaces.test(message)) {
        validation.validation = true;
        return validation;
    } else {
        validation = {
            validation: false,
            field: "message",
            error: `La entrada "${message}", no puede contener caracteres especiales. Solo letras, numeros, puntos o guiones.`
        }
        return validation;
    }
}