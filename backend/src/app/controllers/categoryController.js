const Category = require("../models/categoryModel")
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongoDbId");


//create a new category
const createCategory = asyncHandler(async(req, res) => {
    try{
        const createCategory = await Category.create(req.body);
        res.json(createCategory);
    } catch(error){
        throw new Error(error);
    }
})

//get all categories
const getAllCategory = asyncHandler(async(req, res)=> {
    try {
        const getAllCategory = await Category.find();
        res.json(getAllCategory);
    } catch (error) {
        throw new Error(error);
    }
})

//get a category
const getCategory = asyncHandler(async(req, res)=> {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const getaCategory = await Category.findById(id);
        res.json(getaCategory)
    } catch (error) {
        
    }
});

//update a category
const updatedCategory = asyncHandler(async(req, res)=>{
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const updatedCategory = await Category.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updatedCategory);
    } catch (error) {
        throw new Error(error(error));
    }
})


module.exports = {
    createCategory,
    getAllCategory,
    getCategory,
    updatedCategory
}
