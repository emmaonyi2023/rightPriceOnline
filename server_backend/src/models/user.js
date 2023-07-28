const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20
    },
    userName: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        min: 3,
        max: 20,
        lowercase: true
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        max: 30
    },
    hash_password: {
        type: String,
        required: true,
        min: 8,
        max: 30
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    contactNumber: { type: String },
    profilePicture: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);

userSchema.virtual('password')
.set(function(password) {
    this.hash_password = bcrypt.hashSync(password, 10);
});
 userSchema.methods = {
    authenticate: function(){
        return bcrypt.compareSync(password, this.hash_password)
    }
 }