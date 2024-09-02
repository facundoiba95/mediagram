import checkObjectId from "../../../libs/Notifications/checkObjectId.js";

export default (data) => {
    let validation = {
        validation: false
    }

    const idChat = data.idChat;

    if (typeof checkObjectId(idChat) === "object") {
        validation.validation = true;
        return validation;
    } else {
        validation = {
            validation: false,
            field: "idChat",
            error: `La entrada "${idChat}" no es un id válido.`
        }
        return validation;
    }
}