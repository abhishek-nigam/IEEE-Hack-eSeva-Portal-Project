var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose")

var CoommentSchema = new mongoose.Schema({
    problem_id  : {
        type: String, 
        required: true
    },

    author_id  : {
        type: String, 
        required: false
    },

    comment_text     : {
        type: String, 
        required: true
    },

    by_representative: {
        default: false
    }
    
},{timestamps:true});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Comment", CommentSchema);