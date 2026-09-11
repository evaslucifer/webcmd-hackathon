import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Hackathon Agent Backend is running 🚀",
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Backend is healthy",
  });
});

app.post("/api/agent", (req, res) => {
  const { message } = req.body;

  console.log("User request:", message);

  res.json({
    success: true,
    message: "Agent received your request 🚀",
    request: message,
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
