import { verifyTokenSocket } from "../Auth/verifyTokenSocket.js";
import getChatByID from "../Chat/getChatByID.js";
import getChats from "../Chat/getChats.js";
import getMessages from "../Chat/getMessages.js";
import joinChat from "../Chat/joinChat.js";
import newChat from "../Chat/newChat.js";
import newMessage from "../Chat/newMessage.js";
import { rooms } from "../Notifications/notificationSockets.js";

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
