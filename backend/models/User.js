import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    phone: {
      type: Number,
      require: true,
    },
    studentID: {
      type: Number,
      require: true,
      unique: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
