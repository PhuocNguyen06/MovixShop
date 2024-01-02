const express = require("express");
const { 
    createColor,
    getColor,
    getAllColors
 } = require("../controllers/colorController");
const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createColor);
router.get("/:id", getColor);
router.get("/", getAllColors);
module.exports = router;
