const express = require("express");
const {authMiddleware, isAdmin} = require("../middleware/authMiddleware")
const {
    createCategory,
    getaCategory
} = require("../controllers/blogCatCtronller")
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createCategory);
router.get("/:id", getaCategory);


module.exports = router;