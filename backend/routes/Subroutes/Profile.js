import { User } from "../../models/User.js";

export const UserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select(
      "username email phone studentID createdAt updatedAt"
    );
    res.status(200).json(user);
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Internal server error", error: error.message });
  }
};
