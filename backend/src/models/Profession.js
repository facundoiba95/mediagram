<<<<<<< HEAD
import { Schema, model } from 'mongoose';

const professionSchema = new Schema({
    name: {
        type: String,
        unique: true,
        minlength: 1,
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

=======
import { Schema, model } from 'mongoose';

const professionSchema = new Schema({
    name: {
        type: String,
        unique: true,
        minlength: 1,
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

>>>>>>> b3173dc1 (first commit in Ubuntu)
export default model("Profession", professionSchema);