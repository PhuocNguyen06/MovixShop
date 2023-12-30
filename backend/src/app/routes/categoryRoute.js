const express = require('express');
const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");
const {
    createCategory,
    getAllCategory,
    getCategory,
    updatedCategory
} = require('../controllers/categoryController')
const router = express.Router();



router.post("/", authMiddleware, isAdmin, createCategory);
router.get("/", getAllCategory);
router.get("/:id", getCategory);
router.put("/:id",authMiddleware, isAdmin, updatedCategory);

module.exports = router