const Color = require("../models/colorModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId");

//create color
const createColor = asyncHandler(async (req, res) => {
  try {
    const newColor = await Color.create(req.body);
    res.json(newColor);
  } catch (error) {
    throw new Error(error);
  }
});

//get color

const getColor = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getaColor = await Color.findById(id);
    res.json(getaColor);
  } catch (error) {
    throw new Error(error);
  }
});

//get all colors

const getAllColors = asyncHandler(async (req, res) => {
  try {
    const getAllColors = await Color.find();
    res.json(getAllColors);
  } catch (error) {
    throw new Error(error);
  }
});

//update

const updateColor = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updateColor = await Color.findByIdAndUpdate(
      id,

      req.body,

      {
        new: true,
      }
    );
    res.json(updateColor);
  } catch (error) {
    throw new Error(error);
  }
});
//delete

module.exports = {
  createColor,
  getColor,
  getAllColors,
  updateColor
};
