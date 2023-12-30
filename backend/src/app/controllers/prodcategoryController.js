const Category = require("../models/prodcategoryModel");
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
        throw new Error(error);
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
        throw new Error(error);
    }
})


//delete a category
const deletedCategory = asyncHandler(async(req, res)=>{
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const deletedCategory = await Category.findByIdAndDelete(id);
        res.json(deletedCategory);
    } catch (error) {
        throw new Error(error)
    }
})



module.exports = {
    createCategory,
    getAllCategory,
    getCategory,
    updatedCategory,
    deletedCategory
}
