import express from "express";
import {
  CreateTopic,
  GetTopic,
  CreateMessage,
  GetMessages,
} from "./Subroutes/Discussion.js";
import {
  CreateFeedback,
  GetFeedback,
} from "./Subroutes/Feedback.Controller.js";
import { authMiddleware } from "../middleware/auth.js";

const router = express.Router();

router.post("/create-topic", authMiddleware, CreateTopic);
router.get("/get-topic", authMiddleware, GetTopic);
router.post("/create-message/:id", authMiddleware, CreateMessage);
router.get("/get-message/:id", authMiddleware, GetMessages);
router.post("/create-feedback", authMiddleware, CreateFeedback);
router.get("/get-feedback", authMiddleware, GetFeedback);
router.get("/home", (req, res) => {
  res.send("Hello World");
});

export default router;
