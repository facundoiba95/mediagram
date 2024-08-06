<<<<<<< HEAD
import Notification from "../../models/Notification.js";

export default async ({body, idNotification}) => {
    try {
        const updatedNotification = await Notification.findByIdAndUpdate(
            idNotification,
            body,
            { new: true, runValidators: true }
        );

        if (!updatedNotification) {
            throw new Error('No se encontró la notificación para actualizar. En modifiNotification.js');
        }
    } catch (error) {
        console.error('Ocurrió un error al modificar la notificacion. En "modifyNotification.js". Error: ', error);
    }
=======
import Notification from "../../models/Notification.js";

export default async ({body, idNotification}) => {
    try {
        const updatedNotification = await Notification.findByIdAndUpdate(
            idNotification,
            body,
            { new: true, runValidators: true }
        );

        if (!updatedNotification) {
            throw new Error('No se encontró la notificación para actualizar. En modifiNotification.js');
        }
    } catch (error) {
        console.error('Ocurrió un error al modificar la notificacion. En "modifyNotification.js". Error: ', error);
    }
>>>>>>> b3173dc1 (first commit in Ubuntu)
}