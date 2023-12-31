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

//get All brand

//update the brand

//delete the brand

module.exports = {
    createBrand
};
