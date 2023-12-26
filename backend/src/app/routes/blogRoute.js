const express = require('express');
const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");
const {
    createBlog,
    getBlog,
    getAllBlog,
    updateBlog,
    deletedBlog
} = require("../controllers/blogController")
const router = express.Router();


router.post("/", authMiddleware,isAdmin, createBlog);
router.get("/:id", getBlog);
router.get("/", getAllBlog);
router.put("/:id", authMiddleware, isAdmin, updateBlog);
router.delete("/:id", authMiddleware, isAdmin, deletedBlog )

module.exports = router;