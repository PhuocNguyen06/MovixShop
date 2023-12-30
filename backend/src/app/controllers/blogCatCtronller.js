const Category = require("../models/blogCatModel");
const asyncHandler = require("express-async-handler");

//create a new category
const createCategory = asyncHandler(async (req, res) => {
    try {
      const newCategory = await Category.create(req.body);
      res.json(newCategory);
    } catch (error) {
      throw new Error(error);
    }
  });

//get a category
const getaCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
      const getaCategory = await Category.findById(id);
      res.json(getaCategory);
    } catch (error) {
      throw new Error(error);
    }
  });

module.exports = {
    createCategory,
    getaCategory
}