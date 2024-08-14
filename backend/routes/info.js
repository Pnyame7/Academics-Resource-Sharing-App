import express from "express";
import { CreateTopic } from "./Subroutes/Discussion.js";
import { authMiddleware } from "../middleware/auth.js";

const router = express.Router();

router.post("/create-topic", authMiddleware, CreateTopic);
router.get("/home", (req, res) => {
  res.send("Hello World");
});

export default router;
