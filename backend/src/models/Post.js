import { Schema, model } from 'mongoose';

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
    comments: {
        type: [],
        default:[]
    },
    likes: {
        type: [],
        default: []
    },
    imgPost: {
        type: String,
        require: true
    },
    thumbnail: {
        type: String,
        require: true
    },
    views: Number
}, {
    versionKey: false,
    timestamps: true
});

export default model('Post', postSchema);