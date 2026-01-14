/**
 * Comments API Router
 * 
 * @module routes/api/comments
 * @requires express
 * @requires mongoose
 */

/**
 * Retrieves all comments for a specific post
 * @route GET /api/comments/:postId
 * @param {string} req.params.postId - The ID of the post
 * @returns {object[]} Array of comment objects
 * @returns {number} 200 - Success
 * @returns {object} 500 - Server error
 */

/**
 * Creates a new comment for a specific post
 * @route POST /api/comments/:postId
 * @param {string} req.params.postId - The ID of the post
 * @param {string} req.body.content - The comment content
 * @param {string} req.body.author - The comment author
 * @returns {object} Created comment object with ID
 * @returns {number} 201 - Comment created successfully
 * @returns {object} 500 - Server error
 */

/**
 * Deletes a specific comment by its ID
 * @route DELETE /api/comments/:commentId
 * @param {string} req.params.commentId - The ID of the comment to delete
 * @returns {object} Success message
 * @returns {number} 200 - Comment deleted successfully
 * @returns {number} 404 - Comment not found
 * @returns {object} 500 - Server error
 */

/**
 * Deletes all comments for a specific post
 * @route DELETE /api/comments/post/:postId
 * @param {string} req.params.postId - The ID of the post
 * @returns {object} Success message with count of deleted comments
 * @returns {number} 200 - Comments deleted successfully
 * @returns {object} 500 - Server error
 */
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

// add another endpoint for deleting a comment
router.delete("/post/:postId", async (req, res) => {
  try {
    const deletedComments = await Comment.deleteMany({ postId: req.params.postId });
    res.status(200).json({ message: `${deletedComments.deletedCount} comments deleted successfully.` });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete comments." });
  }
});