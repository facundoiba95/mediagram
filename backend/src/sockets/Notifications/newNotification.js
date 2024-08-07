/*

   cambiar nombre a este archivo !!
   newNotification.js crea una nueva notificacion en base de datos !!
   Esto solo avisa que hay una neuva notificacion
   
*/

export default (socket) => {
    socket.on('newNotification', (data) => {
        const userReceptor = data.userReceptor;
        
        socket.to(userReceptor).emit('newNotification', {
            message: `New notification by "${userReceptor}"!`,
            user: userReceptor
        });
    });
}