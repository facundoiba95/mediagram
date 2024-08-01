import { rooms } from "./notificationSockets.js";

const checkUserInRoom = (rooms, id_socket) => {
    for (const [username, socket_id] of rooms.entries()) {
        rooms.set(username, socket_id.filter(socket => socket !== id_socket));
    }
}

export default (socket) => {
    socket.on('subscribeNotifications', (user) => {
        const userAuth = socket.userAuth.username;

        // Estructura de la sala: Map { usernameAuth, [ socket.id, socket.id, socket.id ] }
        if (!rooms.has(userAuth)) {
            rooms.set(userAuth, []);
        }

        // Añadir el socket.id al array de rooms para userAuth
        rooms.set(userAuth, [socket.id]);
        
        socket.join(userAuth);
    });
}