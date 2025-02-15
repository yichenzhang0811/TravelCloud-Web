import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    location: { type: String, required: false },
    images: [String],
    city: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "City",
      required: true,
    },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  },
  { timestamps: true }
);

// delete all related comment if the post is deleted
PostSchema.pre(
  "deleteOne",
  { document: true, query: false },
  async function (next) {
    console.log(`🔴 Deleting comments for post ${this._id}`);
    await Comment.deleteMany({ post: this._id });
    next();
  }
);

export default mongoose.model("Post", PostSchema);
