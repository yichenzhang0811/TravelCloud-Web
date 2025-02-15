import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import cityRoutes from "./routes/cities.js";
import postRoutes from "./routes/posts.js";
import authRoutes from "./routes/authRoute.js";
import commentRoutes from "./routes/comments.js";
import userRoutes from "./routes/users.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "32mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "32mb", extended: true }));
app.use(cors());

app.use("/cities", cityRoutes);
app.use("/posts", postRoutes);
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/comments", commentRoutes);

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 5001;
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error("Connection to MongoDB failed", err.message);
  }
};

connectDB();

mongoose.connection.on("open", () =>
  console.log("Connection to database has been established successfully")
);
mongoose.connection.on("error", (err) => console.log(err));
