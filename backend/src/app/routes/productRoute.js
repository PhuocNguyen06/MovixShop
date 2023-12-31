const express = require('express');
const {authMiddleware, isAdmin} = require("../middleware/authMiddleware")
const {
    createProduct,
    getaProduct,
    getAllProduct,
    deleteProduct,
    updateProduct,
    addToWishlist,
    rating
} =require("../controllers/productController")
const router = express.Router();

router.post('/', authMiddleware, isAdmin, createProduct);
router.get('/:id', getaProduct);
router.put("/wishlist", authMiddleware, addToWishlist);
router.put("/rating", authMiddleware, rating);
router.delete('/:id', authMiddleware, isAdmin, deleteProduct);
router.put('/:id', authMiddleware, isAdmin, updateProduct);
router.get('/', getAllProduct);


module.exports = router;