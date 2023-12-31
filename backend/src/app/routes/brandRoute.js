const express = require("express");
const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");
const { 
    createBrand,
    getBrand,
    getAllBrand,
    updateBrand
} = require("../controllers/brandController");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createBrand);
router.get("/:id", getBrand);
router.get("/", getAllBrand);
router.put("/:id", authMiddleware, isAdmin, updateBrand);

module.exports = router;
