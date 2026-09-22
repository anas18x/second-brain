import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },

    username: {
      type: String,
      trim: true,
    },

    password: {
      type: String,
    },

    refreshToken: {
      type: String,
    },

    shareSlug: {
      type: String,
      unique: true,
      sparse: true,
    },

    isBrainPublic: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);

export default User;