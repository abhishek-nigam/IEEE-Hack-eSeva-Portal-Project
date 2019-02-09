const mongoose = require("mongoose");

const constants = require('../constants');


const problemSchema = new mongoose.Schema({

    problem_id: {
        type: String,
        required: true
    },

    author_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    region: {
        type: String,
        required: true,
        enum: constants.regionsList
    },

    category: {
        type: String,
        required: true,
        enum: constants.categoriesList
    },

    representative_name: {
        type: String,
        required: true
    },

    img_url_1: {
        type: String
    },

    img_url_2: {
        type: String
    },

    img_url_3: {
        type: String
    },

    status_code: {
        type: String,
        required: true,
        enum: constants.statusCodesList
    },

    assignees: {
        type: String
    },

    problem_title: {
        type: String,
        required: true
    },

    problem_desc: {
        type: String,
        required: true
    },

    upvoting_users: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: '',
        default: []
    },

    priority: {
        type: Number,
        min: 1,
        max: 10
    },

    is_posted_anonymously: {
        type: Boolean,
        default: false
    }

}, { timestamps: true });


module.exports = mongoose.model("Problem", problemSchema);