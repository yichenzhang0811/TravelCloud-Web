import { Router } from "express";
import {
  createPost,
  getPostsByCity,
  getPostById,
  deletePost,
  updatePost,
  getUserPosts,
} from "../controllers/posts.js";
import upload from "../middleware/upload.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = Router();
router.get("/city/:cityId", getPostsByCity);

router.post("/", authMiddleware, upload.array("images", 5), createPost);
router.get("/:postId", getPostById);
router.delete("/:postId", authMiddleware, deletePost);
// 这是routers/post.js
router.put(
  "/:postId/edit",
  authMiddleware,
  upload.array("newImages", 5),
  updatePost
);

router.get("/users/:userId", getUserPosts);

export default router;
