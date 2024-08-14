import mongoose from "mongoose";

const topicSchema = mongoose.Schema(
  {
    topicName: {
      type: String,
      require: true,
      unique: true,
    },
  },
  { timestamps: true }
);

export const Topic = mongoose.model("Topic", topicSchema);
