const express = require("express");
const {authMiddleware, isAdmin} = require("../middleware/authMiddleware")
const {
    createCategory,
    getaCategory,
    getAllCategory,
    updatedCategory,

} = require("../controllers/blogCatCtronller")
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createCategory);
router.get("/:id", getaCategory);
router.get("/", getAllCategory);
router.put("/:id", authMiddleware, isAdmin, updatedCategory);



module.exports = router;