import checkObjectId from "../../../libs/Notifications/checkObjectId.js";

export default (data) => {
    const idUser = data._id;
    let validation = {
        validation: false
    }

    if(typeof checkObjectId(idUser) === "object") {
        validation.validation = true;
        return validation;
    } else {
        validation = {
            validation: false,
            field: "_id",
            error: `El valor "${idUser}" no es un id válido!`
        }
        return validation;
    }
}