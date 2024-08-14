import { Topic } from "../../models/Topic.js";
import { DiscussionForum } from "../../models/DiscussionForum.js";

export const CreateTopic = async (req, res) => {
  //   res.send("Hello World");
  try {
    const { topicName } = req.body;
    if (!topicName) {
      return res.status(400).json({ msg: "A topic is required" });
    }
    const topic = new Topic({
      topicName,
      user: req.user._id,
    });
    await topic.save();
    res.status(200).json({ msg: "Topic created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal server error" });
  }
};
