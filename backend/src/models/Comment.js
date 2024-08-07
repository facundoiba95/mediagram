<<<<<<< HEAD
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
        type: mongoose.Types.ObjectId,
        default: []
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
=======
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
        type: mongoose.Types.ObjectId,
        default: []
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
>>>>>>> b3173dc1 (first commit in Ubuntu)
