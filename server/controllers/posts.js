import Post from "../models/postModel.js";
import mongoose from "mongoose";
import cloudinary from "../cloudinary/cloudinary.js";
import AWS from "aws-sdk";
import { S3Client } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import s3 from "../middleware/upload.js";
import { uploadImageToS3 } from "../middleware/upload.js";

// create Post

export const createPost = async (req, res) => {
  try {
    const { title, content, cityId, userId, location } = req.body;

    if (!title || !content || !cityId || !userId) {
      return res.status(400).json({ message: "Missing required field" });
    }

    let uploadedImages = [];

    if (req.files && req.files.length > 0) {
      uploadedImages = await Promise.all(
        req.files.map((file) => uploadImageToS3(file))
      );
    }

    const newPost = new Post({
      user: userId,
      city: cityId,
      title,
      content,
      images: uploadedImages,
      createDate: new Date(),
      location,
    });

    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    console.error("Create Post failed", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// get all posts of city
export const getPostsByCity = async (req, res) => {
  try {
    const { cityId } = req.params;
    const posts = await Post.find({
      city: new mongoose.Types.ObjectId(cityId),
    }).populate("user", "username avatar");

    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// see the post in details
export const getPostById = async (req, res) => {
  try {
    const { postId } = req.params;
    const post = await Post.findById(postId).populate("user", "username email");

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json({ post });
  } catch (error) {
    console.error("Error fetching Post:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// delete Post (only author)
export const deletePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const userId = req.user._id.toString();

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Cannot find the post" });
    }

    // only the author can delete post
    if (post.user.toString() !== userId) {
      return res
        .status(403)
        .json({ message: "Unauthorized. Only author can delete" });
    }

    await Post.findByIdAndDelete(postId);
    res.status(200).json({ message: "Deleted post successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Deleting post failed", error: errorww.message });
  }
};
// update post (only author)
export const updatePost = async (req, res) => {
  const { postId } = req.params;
  const { title, content, existingImages } = req.body;

  try {
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Cannot find the post" });
    }

    let uploadedImages = [];
    if (req.files && req.files.length > 0) {
      uploadedImages = await Promise.all(
        req.files.map((file) => uploadImageToS3(file))
      );
    }

    const updatedImages = [
      ...(existingImages ? JSON.parse(existingImages) : []),
      ...uploadedImages,
    ];

    post.title = title;
    post.content = content;
    post.images = updatedImages;

    const updatedPost = await post.save();
    res.status(200).json(updatedPost);
  } catch (error) {
    console.error("Update post failed", error);
    res.status(500).json({ message: "update post failed" });
  }
};

// get all posts for user (present in profile)
export const getUserPosts = async (req, res) => {
  try {
    const posts = await Post.find({ user: req.params.userId }).sort({
      createdAt: -1,
    });
    res.status(200).json(posts);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch user posts", error: error.message });
  }
};
