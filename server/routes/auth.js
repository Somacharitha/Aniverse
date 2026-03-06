const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser
} = require("../controllers/authController");

const { protect } = require("../middleware/authMiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/profile", protect, async (req, res) => {

  res.json({
    id: req.user.id,
    name: req.user.name,
    email: req.user.email
  });

});

module.exports = router;