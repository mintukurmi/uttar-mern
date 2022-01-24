const express = require("express");
const router = express.Router();
const Auth = require("../middlewares/Auth");

// import post controller
const postController = require("../controllers/post.controller");

// fetch latest posts
router.get("/latest", Auth, postController.fetchAllLatestPosts);
// fetch user's posts
router.get("/", Auth, postController.fetchAllPosts);
// fetch all categories
router.get("/categories", Auth, postController.fetchAllCategories);
// view a post by id
router.get("/:id", Auth, postController.fetchPostById);
// update post by id
router.put("/", Auth, postController.updatePostById);
// create a new post
router.post("/", Auth, postController.createNewPost);
// Like a post
router.post("/like/:id", Auth, postController.postLikeHandler);

module.exports = router;
