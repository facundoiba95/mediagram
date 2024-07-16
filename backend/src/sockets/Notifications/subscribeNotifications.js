import { rooms } from "./notificationSockets.js";

const checkUserInRoom = (rooms, id_socket) => {
    for (const [username, socket_id] of rooms.entries()) {
        rooms.set(username, socket_id.filter(socket => socket !== id_socket));
    }
}

export default (socket) => {
    socket.on('subscribeNotifications', (user) => {
        const userAuth = socket.userAuth.username

        // RE VER ESTRUCTURA DE LA SALA !!
        //  Map { usernameAuth, [ socket.id, socket.id, socket.id ] }
        if (!rooms.has(userAuth)) {
            rooms.set(userAuth, []);
        } 

        // 
        // checkUserInRoom(rooms, socket.id)


        // socket.join(userAuth);
        rooms.set(userAuth, [socket.id])

        // console.log(`Usuario ${userId} unido a la sala ${userId}`);
        console.log("NUEVO USUARIO SUBSCRIPTO: ", socket.adapter.rooms);
    });
}