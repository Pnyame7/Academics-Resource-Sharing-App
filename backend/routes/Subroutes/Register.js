import { User } from "../../models/User.js";
import bcrypt from "bcrypt";

export const Register = async (req, res) => {
  try {
    const { username, email, password, confirmPassword, phone, studentID } =
      req.body;
    if (
      !username ||
      !email ||
      !password ||
      !confirmPassword ||
      !phone ||
      !studentID
    ) {
      return res.status(400).json({ msg: "Please fill all the inputs" });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ msg: "Passwords do not match" });
    }
    const user = await User.findOne({ studentID });
    if (user) {
      return res.status(400).json({ msg: "Student ID aleardy exits" });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        username,
        email,
        password: hashedPassword,
        phone,
        studentID,
      });
      await newUser.save();
      return res.status(200).json({ msg: "User created successfully!" });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
