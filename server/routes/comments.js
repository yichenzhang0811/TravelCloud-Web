import express from "express";
import {
  createComment,
  deleteComment,
  getCommentsByPost,
} from "../controllers/comments.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, createComment);
router.get("/post/:postId", getCommentsByPost);
router.delete("/:commentId", authMiddleware, deleteComment);

export default router;
