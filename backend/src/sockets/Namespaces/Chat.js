import { verifyTokenSocket } from "../Auth/verifyTokenSocket.js";
import getChatByID from "../Events/Chat/getChatByID.js";
import getChats from "../Events/Chat/getChats.js";
import getMessages from "../Events/Chat/getMessages.js";
import joinChat from "../Events/Chat/joinChat.js";
import newChat from "../Events/Chat/newChat.js";
import newMessage from "../Events/Chat/newMessage.js";
import { rooms } from "../Events/Notifications/notificationSockets.js";

export default (chatNamespace) => {
    chatNamespace.on("connection", (socket) => {
        verifyTokenSocket(socket, () => {
            socket.leaveAll();


            getChats(socket);
            getChatByID(socket)
            newChat(socket);
            joinChat(socket);
            newMessage(socket);
            getMessages(socket)
        }, (error) => {
            console.error("Ocurrio un error al conectar el WebSocket namespace: 'CHAT'. Error: ", error);
        })

        socket.on("disconnect", () => {
            if (socket.userAuth) {
                const usernameAuth = socket.userAuth.username;
                rooms.delete(usernameAuth)
            }
        })
    });
}
