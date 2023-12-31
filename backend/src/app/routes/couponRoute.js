const express = require("express");
const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");
const router = express.Router();
const { 
    createCoupon,
    getCoupon,
    getAllCoupons
} = require("../controllers/couponController")

router.post("/", authMiddleware, isAdmin, createCoupon);
router.get("/:id", authMiddleware, isAdmin, getCoupon);
router.get("/", authMiddleware, isAdmin, getAllCoupons);

module.exports = router;