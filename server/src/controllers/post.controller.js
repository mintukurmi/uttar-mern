const Post = require("../models/Post");
const Category = require("../models/Category");
const User = require("../models/User");
const Response = require("../utils/response.util");
const { ObjectId } = require("mongodb");

module.exports = {
    fetchAllLatestPosts: async (req, res) => {
        try {
            const latestPosts = await Post.find()
                .sort({ _id: -1 })
                .limit(5)
                .populate("author")
                .populate("categories");

            Response.success(res, { posts: latestPosts });
        } catch (err) {
            console.log(err);
            Response.error(res, {});
        }
    },

    fetchAllPosts: async (req, res) => {
        try {
            const posts = await Post.find({ author: req.user._id.toString() });
            Response.success(res, { posts });
        } catch (err) {
            Response.error(res, {});
        }
    },

    fetchAllCategories: async (req, res) => {
        try {
            const categories = await Category.find();
            Response.success(res, { categories });
        } catch (err) {
            Response.error(res, {});
        }
    },

    createNewPost: async (req, res) => {
        try {
            const post = new Post(req.body);
            post.author = req.user._id;
            await post.save();
            const newPost = await Post.findById(post._id).populate("author").populate("categories");
            Response.success(res, { post: newPost }, "Post created");
        } catch (err) {
            console.log(err);
            Response.error(res, {});
        }
    },
    updatePostById: async (req, res) => {
        try {
            const { id, title, description } = req.body;
            const post = await Post.findById(id);
            if (!post) {
                return Response.error(res, {}, "Post not found");
            }

            if (title) {
                post.title = title;
            }

            if (description) {
                post.description = description;
            }
            await post.save();
            Response.success(res, {}, "Post updtaed");
        } catch (err) {
            console.log(err);
            Response.error(res, {});
        }
    },
    fetchPostById: async (req, res) => {
        try {
            const _id = req.params.id;

            const viewed = await Post.findOne({ _id, "views.viewers": req.user._id });

            if (!viewed) {
                await Post.findByIdAndUpdate(
                    _id,
                    {
                        $push: {
                            "views.viewers": req.user._id,
                        },
                    },
                    { new: true }
                );
            }

            const post = await Post.findById(_id)
                .populate("author")
                .populate("categories")
                .populate({
                    path: "comments",
                    populate: {
                        path: "author",
                    },
                });

            if (!post) {
                return Response.error(res, {}, "Post not found");
            }

            Response.success(res, { post });
        } catch (err) {
            console.log(err);
            Response.error(res, {});
        }
    },

    fetchRandomPosts: async (req, res) => {
        try {
            // const posts = await Post.find({
            //     author: { $ne: ObjectId(req.user._id) },
            // }).limit(7);

            const posts = await Post.find().limit(7);

            Response.success(res, { posts });
        } catch (err) {
            console.log(err);
            Response.error(res, {});
        }
    },

    postLikeHandler: async (req, res) => {
        try {
            const id = req.params.id;
            const liked = await Post.findOne({ _id: id, "likes.liked_by": req.user._id });

            if (!liked) {
                await Post.findByIdAndUpdate(
                    id,
                    {
                        $push: {
                            "likes.liked_by": req.user._id,
                        },
                    },
                    { new: true }
                );
            } else {
                await Post.findByIdAndUpdate(
                    id,
                    {
                        $pull: {
                            "likes.liked_by": req.user._id,
                        },
                    },
                    { new: true }
                );
            }
            const post = await Post.findById(id)
                .populate("author")
                .populate("categories")
                .populate({
                    path: "comments",
                    populate: {
                        path: "author",
                    },
                });
            Response.success(res, { post }, "Post liked");
        } catch (err) {
            console.log(err);
        }
    },

    searchHandler: async (req, res) => {
        try {
            const searchText = req.body.searchText;
            const posts = await Post.find({ $text: { $search: searchText } })
                .populate("author")
                .populate("categories");
            Response.success(res, { posts });
        } catch (err) {
            console.log(err);
        }
    },
};
