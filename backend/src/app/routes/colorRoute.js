const express = require("express");
const { 
    createColor,
    getColor,
    getAllColors,
    updateColor
 } = require("../controllers/colorController");
const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createColor);
router.get("/:id", getColor);
router.get("/", getAllColors);
router.put("/", authMiddleware, isAdmin, updateColor);
module.exports = router;
