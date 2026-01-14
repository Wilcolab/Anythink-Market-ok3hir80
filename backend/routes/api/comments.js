const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

// Hey GitHub Copilot, please implement the following routes for comments:
// 1. GET /api/comments/:postId - Retrieve all comments for a specific post
// 2. POST /api/comments/:postId - Create a new comment for a specific post
// 3. DELETE /api/comments/:commentId - Delete a specific comment by its ID

// 1. GET /api/comments/:postId
router.get("/:postId", async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.params.postId });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve comments." });
  }
});

// 2. POST /api/comments/:postId
router.post("/:postId", async (req, res) => {
  try {
    const newComment = new Comment({
      postId: req.params.postId,
      content: req.body.content,
      author: req.body.author,
    });

    const savedComment = await newComment.save();
    res.status(201).json(savedComment);
  } catch (error) {
    res.status(500).json({ error: "Failed to create comment." });
  }
});

// 3. DELETE /api/comments/:commentId
router.delete("/:commentId", async (req, res) => {
  try {
    const deletedComment = await Comment.findByIdAndDelete(req.params.commentId);
    if (!deletedComment) {
      return res.status(404).json({ error: "Comment not found." });
    }
    res.status(200).json({ message: "Comment deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete comment." });
  }
});