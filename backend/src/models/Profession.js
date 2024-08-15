import { Schema, model } from 'mongoose';

const professionSchema = new Schema({
    name: {
        type: String,
        unique: true,
        minlength: 2,
    },
    views: [{
        type: Schema.Types.ObjectId,
        ref: "User",
        default: []
    }],
    counterViews: {
        type: Number,
        default: 0
    }
}, {
    versionKey: false,
    timestamps: true
})

export default model("Profession", professionSchema);