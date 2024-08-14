import { User } from "../../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const Login = async (req, res, next) => {
  try {
    const { username, password, studentID } = req.body;
    if (!username || !password || !studentID) {
      return res.status(400).json({ msg: "Please fill in all fields" });
    }
    const user = await User.findOne({ studentID });
    if (!user) {
      return res.status(400).json({ msg: "User does not exist" });
    } else {
      const validPassword = await bcrypt.compare(password, user.password);
      if (validPassword) {
        // User logged in successfully, create a JWT
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });

        // Set the JWT as a cookie on the client's browser
        res.cookie("token", token, { httpOnly: true });

        res.status(200).json({ msg: "User logged in successfully", token });
      } else {
        return res.status(400).json({ msg: "Invalid credentials" });
      }
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const Logout = async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ msg: "User logged out successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
