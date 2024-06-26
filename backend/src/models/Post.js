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
    description: String,
    tags: [{
        type: Schema.Types.ObjectId,
        default: null,
        ref: 'Tags'
    }],
    shareInExplore: {
        type: Boolean,
        default: false
    },
    location: String,
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
        thumbnail: String,
        _id: mongoose.Schema.Types.ObjectId,
        username: String
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
        require: true
    },
    thumbnail: {
        type: String,
        require: true
    },
    mediaType: {
        enum: ["IMAGE", "VIDEO", "AUDIO"],
        require: true,
        type: String
    },
    views: [{
        thumbnail: String,
        _id: mongoose.Schema.Types.ObjectId,
        username: String
    }]
}, {
    versionKey: false,
    timestamps: true
});

postSchema.index({ postBy: 1});

export default model('Post', postSchema);