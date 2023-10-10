import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        require: true,
    },
    password: {
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
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
    greets: [ Object ]
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