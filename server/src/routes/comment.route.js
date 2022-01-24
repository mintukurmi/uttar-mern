const express = require("express");
const router = express.Router();
const Auth = require("../middlewares/Auth");

const commentController = require("../controllers/comment.controller");

// update a commnet by id
router.put("/", Auth, commentController.updateCommentById);
// add a new comment
router.post("/", Auth, commentController.createNewComment);

module.exports = router;
