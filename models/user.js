const mongoose = require("mongoose"),
      passportLocalMongoose = require("passport-local-mongoose")


const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },

    last_name: {
        type: String
    },

    username: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        //required: true
    },

    email: {
        type: String,
        unique: true,
        required: true
    },

    is_email_verified: {
        default: false
    },

    aadhar: {
        type: String,
        required: true
    },

    submitted_problems: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Problem',
        default: []
    },

    upvoted_problems: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Problem',
        default: []
    },

}, { timestamps: true });

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);