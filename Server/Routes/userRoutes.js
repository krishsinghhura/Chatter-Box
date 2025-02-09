const express = require("express");
const router = express.Router();
const {
  registration,
  login,
  allUsers,
} = require("../Controller/AuthController");
const authorize = require("../middleware/authMiddleware");

router.post("/register", registration);

router.post("/login", login);

router.get("/all-users", allUsers);

module.exports = router;
