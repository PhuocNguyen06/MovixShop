const express = require("express");
const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");
const {
    createEnqiry
} = require("../controllers/enqController");
const router = express.Router();
router.post("/", authMiddleware, isAdmin, createEnqiry);

module.exports = router;