import Comment from "../models/commentModel.js";
import Post from "../models/postModel.js";
import mongoose from "mongoose";

// create Comment
export const createComment = async (req, res) => {
  try {
    const { body, user: userId, post: postId } = req.body;

    if (!body || !userId || !postId) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newComment = new Comment({
      user: userId,
      body,
      post: postId,
    });

    const savedComment = await newComment.save();

    res.status(201).json(savedComment);
  } catch (error) {
    console.error(" Error creating Comment:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// get Comments for one Post
export const getCommentsByPost = async (req, res) => {
  try {
    const postId = req.params.postId;
    const comments = await Comment.find({
      post: new mongoose.Types.ObjectId(postId),
    })
      .populate("user", "username avatar")
      .sort({ createdAt: -1 });
    console.log("Get all comments of one post", comments);
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete comment ( only author )
export const deleteComment = async (req, res) => {
  try {
    const { commentId } = req.params;
    const userId = req.user?._id.toString();

    const comment = await Comment.findById(commentId);
    if (!comment) {
      return res.status(404).json({ message: "Cannot find the comment" });
    }

    // check if the current user is the author of comment
    if (comment.user.toString() !== userId) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    await comment.deleteOne();

    res.status(200).json({ message: "Deleted comment successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Deleting comment failed", error: error.message });
  }
};
