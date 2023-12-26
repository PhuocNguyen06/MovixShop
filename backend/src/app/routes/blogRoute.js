const express = require('express');
const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");
const {
    createBlog
} = require("../controllers/blogController")
const router = express.Router();


router.post("/", authMiddleware,isAdmin, createBlog )

module.exports = router;