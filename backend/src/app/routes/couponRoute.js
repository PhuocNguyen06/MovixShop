const express = require("express");
const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");
const router = express.Router();
const { 
    createCoupon,
    getCoupon,
    getAllCoupons,
    updateCoupon,
    deleteCoupon,
    expiredCoupons
} = require("../controllers/couponController")

router.post("/", authMiddleware, isAdmin, createCoupon);
router.get("/:id", getCoupon);
router.get("/", getAllCoupons);
router.put("/:id", authMiddleware, isAdmin, updateCoupon);
router.delete("/:id", authMiddleware, isAdmin, deleteCoupon);
router.delete("/", authMiddleware, isAdmin, expiredCoupons)

module.exports = router;
