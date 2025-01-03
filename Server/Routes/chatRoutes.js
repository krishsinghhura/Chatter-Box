const express = require("express");
const authorize = require("../middleware/authMiddleware");
const router = express.Router();
const { accessChat } = require("../Controller/ChatController");

router.post("/", authorize, accessChat);
// router.get("/", authorize, fetchChat);
// router.post("/group", authorize, createGroupChat);
// router.put("/rename", authorize, rename);
// router.put("/groupremove", authorize, removeFromGroup);
// router.put("/addgroup", authorize, addToGroup);

module.exports = router;
