import mongoose, { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        minLength: 4,
        validate: 
        {
          validator: function(password) {
            return /^[a-zA-Z0-9]+$/.test(password); // Expresión regular para permitir solo letras y números
          },
          message: props => `${props.value} no es un nombre de usuario válido. El nombre de usuario solo puede contener letras y números.`
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
        trim: true,
        validate: [
            {
              validator: function(password) {
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$-_!%*?&])[A-Za-z\d@$!%-_*?&]{8,}$/.test(password); // mayuscula, minuscula, 8 caracteres, caracter especial
              },
              message: `La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial.`
            }
          ]
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    imgProfile: {
        type: String,
        default: ''
    },
    thumbnail: {
        type: String,
        default: ''
    },
    followings: [{
        type: Schema.Types.ObjectId,
        unique: true
    }],
    followers: [{
        type: Schema.Types.ObjectId,
        unique: true
    }],
    histories: [Object],
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }],
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
    isPrivate: {
        type: Boolean,
        default: false
    },
    viewsInProfile: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    counterViews: {
        type: Number,
        default: 0
    },
    stars:[ Object ],
    likesInProfile:[ Object ],
    greets: [ Object ],
    notifications: [{
        type: mongoose.Types.ObjectId,
        ref: 'Notification'
    }],
    closeList: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    followUpRequest: [{
        status: {
            type: String,
            enum: [ 'PENDING', 'REJECTED', 'ACCEPT' ],
        },
        sentBy:[{
            type: Schema.Types.ObjectId,
            ref: "User",
            unique: true
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