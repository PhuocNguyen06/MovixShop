const Enquiry = require("../models/enqModel");
const validateMongoDbId = require("../utils/validateMongoDbId");
const asynHandler = require("express-async-handler");

//create a new Enqiry
const createEnqiry = asynHandler(async (req, res) => {
  try {
    const createdEnqiry = await Enquiry.create(req.body);
    res.json(createdEnqiry);
  } catch (error) {
    throw new Error(error);
  }
});

//update a Enqiry

const updateEnqiry = asynHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
      const updatedEnqiry = await Coupon.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.json(updatedEnqiry);
    } catch (error) {
      throw new Error(error);
    }
});

//delete a Enqiry

const deleteEnquiry = asynHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
      const deletedEnquiry = await Coupon.findByIdAndDelete(id);
      res.json(deletedEnquiry);
    } catch (error) {
      throw new Error(error);
    }
});

//get a Enqiry

const getEnqiry = asynHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
      const getAEnqiry = await Coupon.findById(id);
      res.json(getAcoupon);
    } catch (error) {
      throw new Error(error);
    }
});

//get All Enquiry

const getAllEnquiry = asynHandler(async (req, res) => {
    try {
      const getAllEnquiry = await Coupon.find();
      res.json(getAllEnquiry);
    } catch (error) {
      throw new Error(error);
    }
});

module.exports = {
  createEnqiry,
  updateEnqiry,
  deleteEnquiry,
  getEnqiry,
  getAllEnquiry
};
