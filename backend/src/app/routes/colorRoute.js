const express = require("express");
const { 
    createColor,
    getColor
 } = require("../controllers/colorController");
const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createColor);
router.get("/:id", getColor);
module.exports = router;
