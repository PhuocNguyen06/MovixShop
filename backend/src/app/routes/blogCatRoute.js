const express = require("express");
const {authMiddleware, isAdmin} = require("../middleware/authMiddleware")
const {
    createCategory,
    getaCategory,
    getAllCategory
} = require("../controllers/blogCatCtronller")
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createCategory);
router.get("/:id", getaCategory);
router.get("/", getAllCategory);


module.exports = router;