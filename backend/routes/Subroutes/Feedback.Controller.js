import { Feedback } from "../../models/Feedback.js";

export const CreateFeedback = async (req, res) => {
  try {
    const { topic, message } = req.body;
    const userId = req.user._id;
    if (!topic || !message) {
      return res.status(400).json({ msg: "Fill All Info" });
    }
    const feedback = new Feedback({
      topic,
      message,
      userId,
    });
    await feedback.save();
    res.status(200).json({ msg: "Feedback sent successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

export const GetFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.find()
      .sort({ createdAt: -1 })
      .populate("userId", "username");
    res.status(200).json(feedback);
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Internal server error", error: error.message });
  }
};
