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


module.exports = {
    createCategory
}