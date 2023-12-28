const express = require('express');
const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");
const {
    createBlog,
    getaBlog,
    getAllBlog,
    updatedBlog,
    deletedBlog,
    liketheBlog,
    disliketheBlog
} = require("../controllers/blogController")
const router = express.Router();


router.post("/", authMiddleware,isAdmin, createBlog);
router.get("/:id", getaBlog);
router.get("/", getAllBlog);
router.put("/likes", authMiddleware, liketheBlog);
router.put("/dislikes", authMiddleware, disliketheBlog)
router.put("/:id", authMiddleware, isAdmin, updatedBlog);
router.delete("/:id", authMiddleware, isAdmin, deletedBlog );


module.exports = router;