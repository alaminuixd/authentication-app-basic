import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import { register } from "./controllers/authController.js";

dotenv.config();

const PORT = process.env.PORT || 3010;
const app = express();

connectDB();
app.use(express.json());

// app.post("/api", register);

app.get("/", (req, res) => {
  try {
    res.status(200).json({ message: "success" });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(PORT, () => {
  console.log(`Listening the port ${PORT}`);
});
