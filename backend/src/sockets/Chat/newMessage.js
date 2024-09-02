import Chat from "../../models/Chat.js";
import Message from '../../models/Message.js';
import idChatValidations from "../Validations/Chat/idChat.validations.js";
import messageValidations from "../Validations/Chat/message.validations.js";

export default (socket) => {
    socket.on("sendMessage", async (data) => {
        const idChat = data.idChat;
        const userAuth = socket.userAuth;
        const message = data.message;
        const socket_id = socket.id;
        const createdAt = new Date().toISOString();

        const validations = [ idChatValidations(data), messageValidations(data) ];

         for (let i = 0; i < validations.length; i++) {
            const element = validations[i];

            if(element.validation !== true) {
                console.error("Ocurrio un error en la validacion de sendMessage. Error: ", element);
                socket.emit("error" , element);
                return;
            }
         }

        const newMessage = new Message({
            idChat,
            sender: userAuth._id,
            text: message
        })
        
        const findChat = await Chat.findById(idChat);

        findChat.lastMessage = await newMessage._id;

        newMessage.save();
        findChat.save();

        socket.to(idChat).emit("newMessage", {
            text: message,
            idChat,
            sender: {
                _id: userAuth.id,
                username: userAuth.username,
                thumbnail: userAuth.thumbnail
            },
            createdAt
        })
    })
}