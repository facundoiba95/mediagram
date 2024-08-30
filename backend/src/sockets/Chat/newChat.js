import Chat from "../../models/Chat.js";

export default (socket) => {
    try {
        socket.on("newChat", async (data) => {
            const idUser = data.idUser;
            const idAuth = socket.userAuth._id;
    
            const findChat = await Chat.find({
                members: {
                    $all: [idAuth, idUser],
                    $size: 2
                }
            });
    
            if (findChat.length) {
                socket.emit("newChat", { idChat: findChat[0]._id})
                return;
            }
    
            const newChat = new Chat({
                members: [idAuth, idUser]
            })
    
            await newChat.save();
    
            socket.emit("newChat", { idChat: newChat._id })
        })
    } catch (error) {
        console.error("Ocurrio un error en newChat. Error: ", error.message)
    }
}