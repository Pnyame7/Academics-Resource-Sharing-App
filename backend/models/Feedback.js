import mongoose from "mongoose";

const feedbackSchema = mongoose.Schema(
  {
    topic: {
      type: String,
      require: true,
    },
    message: {
      type: String,
      require: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const Feedback = mongoose.model("Feedback", feedbackSchema);
