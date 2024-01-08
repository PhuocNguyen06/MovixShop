const Coupon = require("../models/couponModel");
const validateMongoDbId = require("../utils/validateMongoDbId");
const asynHandler = require("express-async-handler");

//create a new Coupon

const createCoupon = asynHandler(async (req, res) => {
  try {
    const { discount, expiry } = req.body;
    if (discount > 100) {
      res.status(400).json({ error: "Discount cannot be greater than 100%" });
    }
    const currentDate = new Date();
    if (new Date(expiry) < currentDate) {
      return res
        .status(400)
        .json({ error: "Expiration date must be in the future" });
    }
    const expired = await Coupon.exists({
      expiry: { $lt: currentDate },
    });

    if (expired) {
      return res.status(400).json({ error: "Coupon has expired" });
    }
    const newCoupon = await Coupon.create(req.body);
    res.json(newCoupon);
  } catch (error) {
    throw new Error(error);
  }
});
// get a coupon

const getCoupon = asynHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getAcoupon = await Coupon.findById(id);
    res.json(getAcoupon);
  } catch (error) {
    throw new Error(error);
  }
});
// get all coupon

const getAllCoupons = asynHandler(async (req, res) => {
  try {
    const coupons = await Coupon.find();
    res.json(coupons);
  } catch (error) {
    throw new Error(error);
  }
});
//update a coupon

const updateCoupon = asynHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updatecoupon = await Coupon.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatecoupon);
  } catch (error) {
    throw new Error(error);
  }
});
//delete a coupon

const deleteCoupon = asynHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletecoupon = await Coupon.findByIdAndDelete(id);
    res.json(deletecoupon);
  } catch (error) {
    throw new Error(error);
  }
});

//delete a coupon have expiredCoupons
const expiredCoupons = asynHandler(async (req, res) => {
  try {
    const currentDate = new Date();
    const couponExpired = await Coupon.find({ expiry: { $lt: currentDate } });
    if (couponExpired.length > 0) {
      const deleteCoupon = await Coupon.deleteMany({
        expiry: { $lt: currentDate },
      });
      res.json(deleteCoupon);
    } else {
      res.json({ message: "No expired coupons found" });
    }
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createCoupon,
  getCoupon,
  getAllCoupons,
  updateCoupon,
  deleteCoupon,
  expiredCoupons,
};
