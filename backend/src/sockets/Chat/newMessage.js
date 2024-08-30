import Chat from "../../models/Chat.js";
import Message from '../../models/Message.js';

export default (socket) => {
    socket.on("sendMessage", async (data) => {
        const idChat = data.idChat;
        const userAuth = socket.userAuth;
        const message = data.message;
        const socket_id = socket.id;
        const createdAt = new Date().toISOString();

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