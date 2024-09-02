import mongoose, { mongo } from "mongoose";
import associateNotificationAndUser from "../../libs/Posts/associateNotificationAndUser.js";
import _idValidations from "../Validations/Notifications/_id.validations.js";

export default (socket) => {
    socket.on('getNotifications', async (data) => {
        const idUser = new mongoose.Types.ObjectId(data._id);
        const userAuth = socket.userAuth;
        const validations = _idValidations(data);

        if(validations.validation !== true) {
            console.error("Ocurrio un error al validar getNotificacions. Error: ", validations);
            socket.emit("error", validations);
            return;
        }

        const result = await associateNotificationAndUser(idUser);

        socket.to(userAuth.username).emit('getNotifications', result);
    })
}