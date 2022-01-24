const express = require("express");
const router = express.Router();
const Auth = require("../middlewares/Auth");

const User = require("../models/User");
const Post = require("../models/Post");

// import controller
const indexController = require("../controllers/index.controller");
const postController = require("../controllers/post.controller");

// login route
router.post("/login", indexController.loginHandler);
// signup route
router.post("/signup", indexController.signupHandler);
// user profile
router.get("/profile", Auth, indexController.getUserProfie);
// profile edit
router.put("/profile/", Auth, indexController.editProfileHandler);
// logout route
router.get("/logout", Auth, indexController.logoutHandler);
// fetch few random post
router.get("/random", Auth, postController.fetchRandomPosts);
// fetch few random post
router.get("/user/:id", Auth, indexController.fetchUserbyId);
// search posts
router.post("/search", Auth, postController.searchHandler);

module.exports = router;
