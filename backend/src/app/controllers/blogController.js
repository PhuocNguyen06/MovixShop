const Blog = require("../models/blogModel");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const validateMongoDbId = require("../utils/validateMongoDbId");

//create a new blog
const createBlog = asyncHandler(async (req, res) => {
  try {
    const newBlog = await Blog.create(req.body);
    res.json(newBlog);
  } catch (error) {
    throw new Error(error);
  }
});

//get Blog
const getaBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getBlog = await Blog.findById(id);
    const updateViews = await Blog.findByIdAndUpdate(id, 
        {
            $inc: { numViews: 1 },  
        },
        { new : true}
    );
    res.json(getBlog);
  } catch (error) {
    throw new Error(error);
  }
});

//get All Blog
const getAllBlog = asyncHandler(async (req, res) => {
  try {
    const getAllBlog = await Blog.find();
    res.json(getAllBlog);
  } catch (error) {
    throw new Error(error);
  }
});

//update Blog
const updateBlog = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
      const updateBlog = await Blog.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.json(updateBlog);
    } catch (error) {
      throw new Error(error);
    }
  });
//delete Blog

const deletedBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedBlog = await Blog.findByIdAndDelete(id);
    res.json(deleteBlog);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createBlog,
  getaBlog,
  getAllBlog,
  updateBlog,
  deletedBlog
};
