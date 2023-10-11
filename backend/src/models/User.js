import mongoose, { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    imgProfile: String,
    followings: [ Object ],
    followers: [ Object],
    histories:[Object],
    posts: [ Object ],
    countPosts: {
        type: Number,
        default: 0
    },
    countFollowers: {
        type: Number,
        default: 0
    },
    countFollowings: {
        type: Number,
        default: 0
    },
    isPrivate: Boolean,
    viewsInProfile: [ Object ],
    stars:[ Object ],
    likesInProfile:[ Object ],
    greets: [ Object ],
    notifications: [{
        _idNotification: {
            type: mongoose.Types.ObjectId,
            default: mongoose.Types.ObjectId,
            unique: true
        },
        type: {
            type: String,
            enum: [ 'FOLLOWERS', 'POSTS', 'ACTIONS' ],
            required: true
        },
        content: [{
            type: Object,
            message: String,
            required: true
        }],
        createdBy: [{
            type: Object,
            required: true,
            _id: mongoose.Types.ObjectId,
            imgProfile: String,
            username: String
        }],
        status: {
            type: String,
            enum: [ 'PENDING','VIEWED' ],
            default: 'PENDING',
            required: true
        },
    }],
    followUpRequest: [{
        status: {
            type: String,
            enum: [ 'PENDING', 'REJECTED', 'ACCEPT' ],
        },
        sentBy:[{
            type: Object,
            imgProfile: String,
            username: String,
            _id: mongoose.Types.ObjectId
        }]
    }]
},{
    timestamps: true,
    versionKey: false
});

userSchema.index({ username: 1 });

userSchema.statics.comparePassword = async (password, recivedPassword) => {
    return await bcrypt.compare(password, recivedPassword);
}

userSchema.pre('save', async function (next){
    const user = this;
    if (!user.isModified("password")) {
      return next();
    }
    const hash = await bcrypt.hash(user.password, 10);
    user.password = hash;
    next();
})

userSchema.pre('save', function(next) {
    this.countPosts = this.posts.length;
    this.countFollowers = this.followers.length;
    this.countFollowings = this.followings.length
    next();
});

export default model('User', userSchema);