import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader.split(" ")[1];
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ message: "Unauthorized: No token provided" });
    }

    if (!token) {
      return res.status(401).json({ message: "Unauthorized. Missing token" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded.id).select("-password");

    if (!req.user) {
      return res
        .status(401)
        .json({ message: "User doesn't exist or invalid token" });
    }

    next();
  } catch (error) {
    console.error("Token failed:", error.message);
    res.status(401).json({ message: "Token invalid", error: error.message });
  }
};

export default authMiddleware;
