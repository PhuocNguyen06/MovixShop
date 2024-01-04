const express = require('express');
const router = express.Router();
const { authmiddleware, isAdmin } = require("../middleware/authMiddleware");
const {
    createEnqiry
} = require("../controllers/enqController");

router.post("/", authmiddleware, isAdmin, createEnqiry);

module.exports = router;