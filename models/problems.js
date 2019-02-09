var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose")

var ProblemSchema = new mongoose.Schema({
    problem_id  : {
        type: String, 
        required: true
    },

    author_id  : {
        type: String, 
        required: true
    },

    region     : {
        type: String, 
        required: true
    },

    category   : {
        type: String,
        required: true
    },

    representative  : {
        type: String, 
        required: true
    },

    img_url_1  : {
        type: String, 
        required: false
    },

    img_url_2     : {
        type: String, 
        required: false
    },

    img_url_3  : {
        type: String,
        required: false
    },

    status_code : {
        type: String,
        required: true
    },

    assignees : {
        type: String,
        required: false
    },

    problem_title : {
        type: String,
        required: true
    },

    problem_desc : {
        type: String,
        required: true
    },

    //upvoting_users




    by_representative: false
    
},{timestamps:true});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Problem", ProblemSchema);