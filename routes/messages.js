const path = require("path");

const express = require("express");

const messageController = require("../controllers/messageController");

const router = express();

router.post("/postMessage", messageController.postMessage);

module.exports = router;
