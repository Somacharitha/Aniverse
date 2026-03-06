const express = require("express");
const router = express.Router();

const {
  addAnime,
  getWatchlist,
  updateAnime,
  deleteAnime,
  getStats
} = require("../controllers/watchlistController");

const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, addAnime);

router.get("/", protect, getWatchlist);

router.put("/:id", protect, updateAnime);

router.delete("/:id", protect, deleteAnime);
router.get("/stats", protect, getStats);



module.exports = router;