import { Topic } from "../../models/Topic.js";
import { DiscussionForum } from "../../models/DiscussionForum.js";

export const CreateTopic = async (req, res) => {
  //   res.send("Hello World");
  try {
    const { topicName } = req.body;
    const userId = req.user._id;
    if (!topicName) {
      return res.status(400).json({ msg: "A topic is required" });
    }
    const topic = new Topic({
      topicName,
      //   user: req.user._id,
      userId,
    });
    await topic.save();
    res.status(200).json({ msg: "Topic created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

export const GetTopic = async (req, res) => {
  try {
    const topics = await Topic.find().sort({ updatedAt: -1 });
    res.status(200).json(topics);
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Internal server error", error: error.message });
  }
};

export const CreateMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: topicId } = req.params;
    const userId = req.user._id;
    console.log("Topic Id is: ", topicId);
    console.log("None Error");

    const topic = await Topic.findById(topicId);

    if (message === "") {
      return res.status(401).json({ msg: "Fill message" });
    }

    const newDiscussionForum = new DiscussionForum({
      userId,
      topicId,
      message,
    });

    if (newDiscussionForum) {
      topic.messages.push(newDiscussionForum);
      await Promise.all([topic.save(), newDiscussionForum.save()]);
      res.status(200).json({ newDiscussionForum, msg: "Message sent" });
    } else {
      res.status(400).json({ msg: "Message not sent" });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ msg: "Internal server error", errorName: error.message });
  }
};

export const GetMessages = async (req, res) => {
  try {
    const { id: topicId } = req.params;
    const topic = await Topic.findById(topicId).populate({
      path: "messages",
      populate: { path: "userId" },
    });
    // res.status(200).json(topic.discussionForum);
    res.status(200).json(topic.messages);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ msg: "Internal server error", errorMessage: error.message });
  }
};
