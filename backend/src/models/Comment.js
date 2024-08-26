import mongoose, { Schema, model } from 'mongoose';

const commentSchema = new Schema({
    comment: {
        minlength: 1,
        type: String,
        required: true
    },
    commentBy: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "User"
    },
    referenceId: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
    likes: [{
        idUser: {
            type: Schema.Types.ObjectId,
            unique: true,
            ref: "User"
        },
        idNotification: {
            type: Schema.Types.ObjectId,
            ref: "Notification"
        }
    }],
    counterLikes: {
        type: Number,
        default: 0
    },
    replies: [{
        type: mongoose.Types.ObjectId,
        default: []
    }]
},
    {
        versionKey: false,
        timestamps: true
    })


    commentSchema.index({ referenceId: 1});
    commentSchema.index({ commentBy: 1 });

    export default model("Comment", commentSchema);
