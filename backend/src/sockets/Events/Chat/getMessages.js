import Message from "../../../models/Message.js";
import idChatValidations from "../../Validations/Chat/idChat.validations.js";


export default (socket) => {
    socket.on("getMessages", async (data) => {
        const idChat = data.idChat;
        const validations = idChatValidations(data);
        
        if(validations.validation !== true) {
            console.error("Ocurrio un error en la validacion de getMessages. Error: ", validations);
            socket.emit("error", validations);
            return;
        }

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