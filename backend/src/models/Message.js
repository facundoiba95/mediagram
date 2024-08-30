import mongoose, { Schema, model } from "mongoose";

const messageSchema = new Schema({
    idChat: {
        type: mongoose.Schema.ObjectId,
        require: true,
        ref: "Chat"
    },
    sender: {
        type: mongoose.Schema.ObjectId,
        require: true,
        ref: "User"
    },
    text: {
        type: String,
        default: ""
    },
    mediaUrl: {
        type: String,
        default: ""
    },
    important: {
        type: Boolean,
        default: false
    }
},
    {
        versionKey: false,
        timestamps: true
    })

messageSchema.index({ idChat: 1 });
messageSchema.index({ sender: 1 });

export default model("Message", messageSchema);