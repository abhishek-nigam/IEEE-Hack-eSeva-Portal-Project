var mongoose = require("mongoose");


var commentSchema = new mongoose.Schema({
    problem_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Problem',
        required: true
    },

    author_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Problem',
        required: true
    },

    text: {
        type: String,
        required: true
    },

    is_by_representative: {
        type: Boolean,
        default: false
    }

}, { timestamps: true });


module.exports = mongoose.model("Comment", commentSchema);