import { verifyTokenSocket } from "../Auth/verifyTokenSocket.js";
import notificationSockets, { rooms } from "../Events/Notifications/notificationSockets.js";

export default (notificationsNamespace) => {
    notificationsNamespace.on("connection", (socket) => {
        verifyTokenSocket(socket, () => {
            socket.leaveAll();

            notificationSockets(socket);
        }, (error) => {
            console.error("Ocurrio un error al conectar el WebSocket namespace: 'NOTIFICATIONS'. Error: ", error);
        })

        socket.on("disconnect", () => {
            if (socket.userAuth) {
                const usernameAuth = socket.userAuth.username;
                rooms.delete(usernameAuth)
            }
        })
    });
}
