import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";

import account from "./routes/account.js";

import { connectDB } from "./config/connectDB.js";

dotenv.config();

const app = express();
// Connecting to the database
connectDB();

app.use(express.json());
app.use(cookieParser());
// app.use(cors());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello from backend");
});

app.use("/account", account);

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
