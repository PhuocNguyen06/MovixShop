const express = require('express');
const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");
const {
    createBlog,
    getBlog,
    getAllBlog,
    updateBlog
} = require("../controllers/blogController")
const router = express.Router();


router.post("/", authMiddleware,isAdmin, createBlog);
router.get("/:id", getBlog);
router.get("/", getAllBlog);
router.put("/:id", authMiddleware, isAdmin, updateBlog);
module.exports = router;