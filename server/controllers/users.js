import User from "../models/userModel.js";
import cloudinary from "../cloudinary/cloudinary.js";

//get use profile
export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json(user);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch user profile", error: error.message });
  }
};

export const updateUserProfile = async (req, res) => {
  try {
    const { username, email, avatar } = req.body;
    let avatarUrl = avatar;

    // upload avatar to Cloudinary if users upload
    if (avatar && !avatar.startsWith("http")) {
      const uploadResponse = await cloudinary.uploader.upload(avatar, {
        folder: "avatars",
        width: 150,
        height: 150,
        crop: "fill",
      });
      avatarUrl = uploadResponse.secure_url;
    }

    // update User
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      { username, email, avatar: avatarUrl || "/default-avatar.png" },
      { new: true, runValidators: true }
    ).select("-password");

    if (!updatedUser)
      return res.status(404).json({ message: "User not found" });

    res.status(200).json(updatedUser);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update profile", error: error.message });
  }
};

// change user's avatar
export const updateUserAvatar = async (req, res) => {
  try {
    const { avatar } = req.body;

    let avatarUrl = avatar;
    if (avatar && !avatar.startsWith("http")) {
      const uploadResponse = await cloudinary.uploader.upload(avatar, {
        folder: "avatars",
        width: 150,
        height: 150,
        crop: "fill",
      });
      avatarUrl = uploadResponse.secure_url;
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      { avatar: avatarUrl || "/default-avatar.png" },
      { new: true, runValidators: true }
    ).select("-password");

    if (!updatedUser)
      return res.status(404).json({ message: "User not found" });

    res.status(200).json(updatedUser);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update avatar", error: error.message });
  }
};
