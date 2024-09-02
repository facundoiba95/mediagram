import Chat from "../../models/Chat.js";
import idChatValidations from "../Validations/Chat/idChat.validations.js";

export default (socket) => {
    socket.on("getChatByID", async (data) => {
        const idChat = data.idChat;
        const validations = idChatValidations(data);

        if(validations.validation !== true) {
            console.log("Error en la validacion de idChat en getChatByID.js . Error: ", validations);
            
            socket.emit("error", {
                error: validations
            })
            
            return;
        }

        
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