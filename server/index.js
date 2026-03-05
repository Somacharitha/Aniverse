const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// health route
app.get("/api/health", (req, res) => {
  res.json({
    status: "AniVerse API running",
    time: new Date()
  });
});

// server start
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});