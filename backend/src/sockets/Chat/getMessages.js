import Message from "../../models/Message.js";


export default (socket) => {
    socket.on("getMessages", async (data) => {
        const idChat = data.idChat;

        const findMessages = await Message
        .find({idChat})
        .populate({
            path: "sender",
            select: "_id username thumbnail"
        });

        socket.to(idChat).emit("getMessages", {
            messages: findMessages
        })
    })
}