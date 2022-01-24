const mongoose = require("mongoose");
const moment = require("moment");

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            trim: true,
            required: true,
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
        likes: {
            likes_count: Number,
            liked_by: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
        },
        categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
        views: {
            viewers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
        },
    },
    {
        timestamps: true,
    }
);

postSchema.index({ title: "text", description: "text" });

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
