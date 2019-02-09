var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose")

var UserSchema = new mongoose.Schema({
    firstname : {
        type: String, 
        required: true
    },
    
    lastname  : {
        type: String, 
        required: true
    },

    password  : {
        type: String, 
        required: true
    },

    email     : {
        type: String, 
        required: true
    },

    aadhar    : {
        type: String, 
        required: true
    },
    
    is_email_verified : false,
    //submitted_problems :
    //upvoted_problems :
    
},{timestamps:true});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);