import express from "express";
import { Register } from "./Subroutes/Register.js";
import { Login, Logout } from "./Subroutes/Login.js";
import { UpdateProfile, UserProfile } from "./Subroutes/Profile.js";
import { authMiddleware } from "../middleware/auth.js";

import path from "path";
import multer from "multer";

import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/register", Register);
router.post("/login", Login);
router.get("/logout", Logout);
router.get("/profile", authMiddleware, UserProfile);
router.put(
  "/update-profile",
  upload.single("image"),
  authMiddleware,
  UpdateProfile
);
router.get("/home", authMiddleware, (req, res) => {
  res.send("Hello World");
});

export default router;
