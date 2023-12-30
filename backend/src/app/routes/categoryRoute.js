const express = require('express');
const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");
const {
    createCategory,
    getAllCategory
} = require('../controllers/categoryController')
const router = express.Router();



router.post("/", authMiddleware, isAdmin, createCategory);
router.get("/", getAllCategory);

module.exports = router