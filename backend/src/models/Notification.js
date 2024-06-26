import mongoose, { Schema, model } from 'mongoose';

const notificationSchema = new Schema({
    type: {
        type: String,
        enum: [ 'comment', 'like', 'actions', 'follower', 'referTo' ],
        required: true
    },
    content: {
        type: Object,
        message: String,
        imgContent: String,
        idPost: {
            type: mongoose.Types.ObjectId,
            ref: 'Post'
        },
        idContent: mongoose.Types.ObjectId,
    },
    createdBy: {
        type: Object,
        required: true,
        _id: mongoose.Types.ObjectId,
        thumbnail: String,
        username: String,
        ref: 'User'
    },
    status: {
        type: String,
        enum: [ 'PENDING','VIEWED' ],
        default: 'PENDING',
        required: true
    }
}, 
{
    versionKey: false,
    timestamps: true
});

export default model('Notification', notificationSchema);