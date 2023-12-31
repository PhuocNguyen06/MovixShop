const express = require("express");
const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");
const router = express.Router();
const { 
    createCoupon
} = require("../controllers/couponController")
router.post("/", authMiddleware, isAdmin, createCoupon);

module.exports = router;