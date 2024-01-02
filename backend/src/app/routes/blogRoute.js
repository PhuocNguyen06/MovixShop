const express = require("express");
const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");
const {
  createBlog,
  getaBlog,
  getAllBlog,
  updatedBlog,
  deletedBlog,
  liketheBlog,
  disliketheBlog,
  uploadImages,
} = require("../controllers/blogController");
const { blogImgResize, uploadPhoto } = require("../middleware/uploadImage");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createBlog);
router.put(
  "/upload/:id",
  authMiddleware,
  isAdmin,
  uploadPhoto.array("images", 2),
  blogImgResize,
  uploadImages
);
router.get("/:id", getaBlog);
router.get("/", getAllBlog);
router.put("/likes", authMiddleware, liketheBlog);
router.put("/dislikes", authMiddleware, disliketheBlog);
router.put("/:id", authMiddleware, isAdmin, updatedBlog);
router.delete("/:id", authMiddleware, isAdmin, deletedBlog);

module.exports = router;
