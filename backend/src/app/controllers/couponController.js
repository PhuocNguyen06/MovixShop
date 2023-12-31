const Coupon = require("../models/couponModel");
const validateMongoDbId = require("../utils/validateMongodbId");
const asynHandler = require("express-async-handler");


//create a new Coupon

const createCoupon = asynHandler(async (req, res) => {
    try {
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

//delete a coupon

module.exports = {
    createCoupon,
    getCoupon,
    getAllCoupons
 }