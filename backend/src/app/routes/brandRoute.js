const express = require("express");
const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");
const { 
    createBrand 
} = require("../controllers/brandController");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createBrand);

module.exports = router;
