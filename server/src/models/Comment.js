const mongoose = require("mongoose");
const moment = require("moment");

const commentSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    likes: [String],
    views: [String],
    lastUpdated: {
        type: Date,
        default: moment().format(),
    },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
