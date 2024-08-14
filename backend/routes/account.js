import express from "express";
import { Register } from "./Subroutes/Register.js";
import { Login, Logout } from "./Subroutes/Login.js";
import { UserProfile } from "./Subroutes/Profile.js";
import { authMiddleware } from "../middleware/auth.js";

const router = express.Router();

router.post("/register", Register);
router.post("/login", Login);
router.get("/logout", Logout);
router.get("/profile", authMiddleware, UserProfile);
router.get("/home", authMiddleware, (req, res) => {
  res.send("Hello World");
});

export default router;
