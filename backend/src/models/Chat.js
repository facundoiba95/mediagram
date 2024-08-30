import mongoose, { Schema, model } from 'mongoose';

const chatSchema = new Schema({
    members: [{
        type: mongoose.Schema.ObjectId,
        ref: "User"
    }],
    importants: {
        type: mongoose.Schema.ObjectId,
        ref: "Chat"
    },
    description: {
        type: String,
        default: ""
    },
    type: {
        type: String,
        enum: ["PRIVATE", "GROUP"],
        default: "PRIVATE",
        require: true
    },
    imgUrl: {
        type: String,
        default: ""
    },
    lastMessage: {
        type: mongoose.Schema.ObjectId,
        ref: "Message"
    }
},
    {
        timestamps: true,
        versionKey: false
    })

export default model("Chat", chatSchema);