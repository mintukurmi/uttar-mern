const Post = require("../models/Post");
const Comment = require("../models/Comment");
const Response = require("../utils/response.util");

module.exports = {
    updateCommentById: async (req, res) => {
        try {
            const _id = req.body.id;
            const newComment = req.body.comment;
            const post = await Post.findOne({ "comments._id": _id });

            if (!post) {
                return Response.error(res, {}, "Post not found");
            }

            for (let i = 0; i < post.comments.length; i++) {
                if (post.comments[i]._id.toString() === _id) {
                    if (post.comments[i].author.toString() === req.user._id.toString()) {
                        post.comments[i].comment = newComment;
                        await post.save();
                        return;
                    }
                }
            }
            Response.success(res, {}, "Commment updated");
        } catch (err) {
            console.log(err);
            Response.error(res, {});
        }
    },

    createNewComment: async (req, res) => {
        try {
            const id = req.body.id;
            const post = await Post.findById(id);

            if (!post) {
                return Response.notfound(res, {}, "Post not found");
            }

            const newComment = new Comment({
                comment: req.body.comment,
                author: req.user._id,
            });

            const isSaved = await newComment.save();

            if (!isSaved) {
                throw new Error("Comment not saved");
            }

            post.comments.push(newComment._id);

            await post.save();

            const updatedPost = await Post.findById(id)
                .populate("author")
                .populate("categories")
                .populate({
                    path: "comments",
                    populate: {
                        path: "author",
                    },
                });

            Response.success(res, { post: updatedPost }, "Comment added successfully");
        } catch (err) {
            console.log(err);
        }
    },
};
