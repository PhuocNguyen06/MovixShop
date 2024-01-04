const express = require("express");
const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");
const {
    createEnqiry,
    updateEnqiry,
    
} = require("../controllers/enqController");
const router = express.Router();
router.post("/", authMiddleware, isAdmin, createEnqiry);
router.put("/:id", authMiddleware, isAdmin, updateEnqiry);


module.exports = router;