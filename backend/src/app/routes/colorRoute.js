const express = require("express");
const { 
    createColor,
    getColor,
    getAllColors,
    updateColor,
    deleteColor,
 } = require("../controllers/colorController");
const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createColor);
router.get("/:id", getColor);
router.get("/", getAllColors);
router.put("/:id", authMiddleware, isAdmin, updateColor);
router.put("/:id", authMiddleware, isAdmin, deleteColor);
module.exports = router;
