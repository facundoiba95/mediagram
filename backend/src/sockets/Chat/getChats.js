import Chat from "../../models/Chat.js";

export default (socket) => {
    socket.on("getChats", async () => {
        const idAuth = socket.userAuth._id
        const foundChats = await Chat
        .find({members: {$in: [idAuth]}})
        .populate({
            path: "members",
            select: "_id username thumbnail"
        })
        .populate({
            path: "lastMessage"
        })
        .sort({updatedAt: -1});

        socket.emit("getChats", {
            chats: foundChats
        })
    })
}