import mongoose, { Schema, model } from 'mongoose';

const postSchema = new Schema({
    typePost: {
        require: true,
        type: String,
    },
    postBy: {
        type: Schema.Types.ObjectId,
        require: true
    },
    referTo: {
        type:[],
        default: [],
    },
    description: String,
    location: String,
    comments: [{
        _id: {
            type: Schema.Types.ObjectId,
            default: () => new mongoose.Types.ObjectId() // genera nuevo ObjectID
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
    likes: {
        type: [],
        default: []
    },
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
    imgPost: {
        type: String,
        require: true
    },
    thumbnail: {
        type: String,
        require: true
    },
    views: [{
        imgProfile: String,
        _id: mongoose.Schema.Types.ObjectId,
        username: String
    }]
}, {
    versionKey: false,
    timestamps: true
});

postSchema.index({ _id: 1 });
postSchema.index({ postBy: 1});

export default model('Post', postSchema);