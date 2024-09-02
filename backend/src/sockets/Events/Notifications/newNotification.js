/*

   cambiar nombre a este archivo !!
   newNotification.js crea una nueva notificacion en base de datos !!
   Esto solo avisa que hay una neuva notificacion
   
*/

import userReceptorValidations from "../../Validations/Notifications/userReceptor.validations.js";

export default (socket) => {
    socket.on('newNotification', (data) => {
        const userReceptor = data.userReceptor;
        const validations = userReceptorValidations(data);

        if(validations.validation !== true) {
            console.error("Error al validar newNotification. Error: ", validations);
            socket.emit("error", validations);
            return;
        }
        
        socket.to(userReceptor).emit('newNotification', {
            message: `New notification by "${userReceptor}"!`,
            user: userReceptor
        });
    });
}