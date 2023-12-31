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

// get all coupon

//update a coupon

//delete a coupon

module.exports = {
    createCoupon
 }