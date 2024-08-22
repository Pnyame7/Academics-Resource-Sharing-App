import mongoose from "mongoose";

const topicSchema = mongoose.Schema(
  {
    topicName: {
      type: String,
      require: true,
      unique: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "DiscussionForum",
        default: [],
      },
    ],
  },
  { timestamps: true }
);

export const Topic = mongoose.model("Topic", topicSchema);
