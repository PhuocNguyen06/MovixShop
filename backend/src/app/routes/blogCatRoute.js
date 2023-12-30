const express = require("express");
const {authMiddleware, isAdmin} = require("../middleware/authMiddleware")
const {
    createCategory
} = require("../controllers/blogCatCtronller")
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createCategory);


module.exports = router;