const Blog = require("../models/blogModel");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const validateMongoDbId = require("../utils/validateMongoDbId")


//create a new blog
const createBlog = asyncHandler(async(req, res)=> {
    try {
        const newBlog = await Blog.create(req.body);
        res.json(newBlog);
    } catch (error) {
        throw new Error(error);
    }
})

module.exports = { createBlog }