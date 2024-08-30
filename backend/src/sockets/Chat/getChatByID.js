import Chat from "../../models/Chat.js";

export default (socket) => {
    socket.on("getChatByID", async (data) => {
        const idChat = data.idChat;

        const populateChat = await Chat
            .find({ _id: idChat })
            .populate({
                path: "members",
                select: "_id username thumbnail"
            });

        socket.emit("getChatByID", {
            chat: populateChat
        })
    })
}