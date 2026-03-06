const express = require("express");
const router = express.Router();

const {
  search,
  trending,
  getDetails
} = require("../controllers/animeController");

router.get("/search", search);
router.get("/trending", trending);
router.get("/:id", getDetails);

module.exports = router;