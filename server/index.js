const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const { connectDB, sequelize } = require("./config/db");
const authRoutes = require("./routes/auth");
const watchlistRoutes = require("./routes/watchlist");
const animeRoutes = require("./routes/anime");
const recommendationRoutes = require("./routes/recommendations");
const errorHandler = require("./middleware/errorHandler");
dotenv.config();

const app = express();

// connect database
connectDB();

// create tables automatically
sequelize.sync()
  .then(() => {
    console.log("📦 Database synced");
  })
  .catch((err) => {
    console.error("❌ DB Sync Error:", err);
  });

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/watchlist", watchlistRoutes);
app.use("/api/anime", animeRoutes);
app.use("/api/recommendations", recommendationRoutes);

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
// global error handler
app.use(errorHandler);