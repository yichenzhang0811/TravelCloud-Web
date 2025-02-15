import { Router } from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  getUserProfile,
  updateUserProfile,
  updateUserAvatar,
} from "../controllers/users.js";

const router = Router();

router.get("/:userId", getUserProfile);
router.put("/:userId", authMiddleware, updateUserProfile);
router.put("/:userId/avatar", authMiddleware, updateUserAvatar);

export default router;
