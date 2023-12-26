const express = require('express');
const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");
const {
    createBlog,
    getaBlog,
    getAllBlog,
    updateBlog,
    deletedBlog
} = require("../controllers/blogController")
const router = express.Router();


router.post("/", authMiddleware,isAdmin, createBlog);
router.get("/:id", getaBlog);
router.get("/", getAllBlog);
router.put("/:id", authMiddleware, isAdmin, updateBlog);
router.delete("/:id", authMiddleware, isAdmin, deletedBlog )

module.exports = router;