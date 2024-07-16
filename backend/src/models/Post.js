import mongoose, { Schema, model } from 'mongoose';

const postSchema = new Schema({
    typePost: {
        require: true,
        type: String,
        enum: ["POST", "FASTPOST", "EXCLUSIVEPOST"]
    },
    postBy: {
        type: Schema.Types.ObjectId,
        require: true,
        ref: "User"
    },
    referTo: {
        type:[],
        default: [],
    },
    description: {
        type: String,
        default: null
    },
    tags: [{
        type: Schema.Types.ObjectId,
        default: null,
        ref: 'Tags'
    }],
    shareInExplore: {
        type: Boolean,
        default: false
    },
    location: {
        type: String,
        default: null
    },
    comments: [{
        _id: {
            required: true,
            type: Schema.Types.ObjectId
        },
        _idPost: Schema.Types.ObjectId,
        sender: {
            thumbnail: String,
            username: String,
            _id: Schema.Types.ObjectId
        },
        content: {
            type: String,
            required: true,
            default: ''
        },
        date: {
            type: String,
            default: () => new Date().toISOString(),
        }
    }],
    likes: [{
        idUser: {
            type: Schema.Types.ObjectId,
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
    counterComments: {
        type: Number,
        default: 0
    },
    counterViews: {
        type: Number,
        default: 0
    },
    anonymViews: {
        type: Number,
        default: 0
    },
    media_url: {
        type: String,
        default: ""
    },
    thumbnail: {
        type: String,
        default: ""
    },
    textContent: String,
    mediaType: {
        enum: ["IMAGE", "VIDEO", "AUDIO"],
        require: true,
        type: String
    },
    views: [{
        type: Schema.Types.ObjectId,
        default: "",
        unique: true,
        ref: "User"
    }]
}, {
    versionKey: false,
    timestamps: true
});

postSchema.index({ postBy: 1});

export default model('Post', postSchema);