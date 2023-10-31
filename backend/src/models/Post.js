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
            default: () => new mongoose.Types.ObjectId() // Generar un ObjectID por defecto
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
        }
    }],
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
    views: [{
        imgProfile: String,
        _id: mongoose.Schema.Types.ObjectId,
        username: String
    }]
}, {
    versionKey: false,
    timestamps: true
});

export default model('Post', postSchema);