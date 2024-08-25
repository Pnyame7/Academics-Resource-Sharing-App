import { User } from "../../models/User.js";

export const UserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select(
      "username email phone studentID image createdAt updatedAt"
    );
    res.status(200).json(user);
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Internal server error", error: error.message });
  }
};

export const UpdateProfile = async (req, res) => {
  try {
    const imageName = req.file ? req.file.filename : undefined;
    const user = await User.findById(req.user._id);
    user.username = req.body.username;
    user.email = req.body.email;
    user.phone = req.body.phone;
    user.studentID = req.body.studentID;
    imageName !== undefined
      ? (user.image = imageName)
      : (user.image = req.body.image);
    if (!user.username || !user.email || !user.phone || !user.studentID) {
      return res.status(400).json({ msg: "Please fill in all fields" });
    }
    await user.save();
    res.status(200).json({ msg: "Profile updated successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Internal server error", error: error.message });
    console.log("error", error.message);
  }
};
