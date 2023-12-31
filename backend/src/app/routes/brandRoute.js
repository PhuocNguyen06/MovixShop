const express = require("express");
const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");
const { 
    createBrand,
    getBrand
} = require("../controllers/brandController");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createBrand);
router.get("/:id", getBrand);

module.exports = router;
