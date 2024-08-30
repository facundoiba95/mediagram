export const room = new Map();
import Chat from '../../models/Chat.js';

const updateRoomSockets = (rooms, idChat, id_socket) => {
    if (rooms.has(idChat)) {
        const ids_sockets = rooms.get(idChat);

        const updatedSockets = ids_sockets.filter(id => id !== id_socket);
        rooms.set(idChat, updatedSockets);
    }
};

export default (socket) => {
    socket.on("joinChat", async (data) => {
        const id_socket = socket.id;
        const idChat = data.idChat;
        const userAuth = socket.userAuth;

        const findChat = await Chat.find({_id: idChat});

        if(!findChat.length) {
            socket.emit("joinChat" , {
                message: "No se encontro el chat!"
            })
            return;
        };

        socket.leaveAll();

        if (!room.has(idChat)) {
            room.set(idChat, []);
        }

        for (const [idChat, ids_sockets] of room.entries()) {
            if (ids_sockets.includes(id_socket) && idChat !== idChat) {
                updateRoomSockets(room, idChat, id_socket);
            }
        }

        const currentSockets = room.get(idChat);

        if (!currentSockets.includes(id_socket)) {
            currentSockets.push(id_socket);
            room.set(idChat, currentSockets);
        }

        socket.join(idChat);

        socket.emit("joinChat", {
            message: `Usuario "${userAuth.username}" agregado al chat: "${idChat}"`
        })
    })
}