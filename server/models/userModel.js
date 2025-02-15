import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: {
      type: String,
      default:
        "https://th.bing.com/th/id/OIP.TmFdrhMS6gzhI-ACF3977wHaF2?rs=1&pid=ImgDetMain",
    }, // default avatar
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
    intro: { type: String },
  },
  { timestamps: true }
);
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
export default mongoose.model("User", UserSchema);
