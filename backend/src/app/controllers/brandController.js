const Brand = require("../models/brandModel");
const asyncHandler = require("express-async-handler");

//create a brand

const createBrand = asyncHandler(async (req, res) => {
  try {
    const newBrand = await Brand.create(req.body);
    res.json(newBrand);
  } catch (error) {
    throw new Error(error);
  }
});

//get the brand

const getBrand = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
      const getaBrand = await Brand.findById(id);
      res.json(getaBrand);
    } catch (error) {
      throw new Error(error);
    }
});
//get All brand

//update the brand

//delete the brand

module.exports = {
    createBrand,
    getBrand
};
