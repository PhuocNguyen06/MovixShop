const express = require("express");
const router = express.Router();
const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");
const {
  createUser,
  loginSucess,
  loginFailed,
  googleAuth,
  googleCallback,
  loginUserCtrl,
  getallUser,
  getaUser,
  deletedUser,
  updatedUser,
  blockUser,
  unblockUser,
  handleRefreshToken,
  logout,
  updatePassword,
  forgotPasswordToken,
  resetPassword,
  loginAdmin,
  getWishlist,
  saveAddress,
  addToCart,
  getUserCart,
  emptyCart,
  applyCoupon,
  createOrder,
  deleteOrder,
  getOrders,
  getAllOrders,
  updateOrderStatus,
  getOrderByUserId,
} = require("../controllers/userController");

router.post("/register", createUser);
router.post("/forgot-password-token", forgotPasswordToken);
router.put("/reset-password/:token", resetPassword);
router.put("/password", authMiddleware, updatePassword);
router.post("/login", loginUserCtrl);
// router.get("/login/success", loginSucess);
// router.get("/login/failed", loginFailed);
router.get("/google", googleAuth);
router.get("/google/callback", googleCallback);
router.post("/admin-login", loginAdmin);
router.post("/cart", authMiddleware, addToCart);
router.post("/cart/applycoupon", authMiddleware, applyCoupon);
router.post("/cart/cash-order", authMiddleware, createOrder);
router.put(
  "/order/update-order/:id",
  authMiddleware,
  isAdmin,
  updateOrderStatus
);
router.delete("/order/:id", authMiddleware, deleteOrder);
router.get("/all-users", authMiddleware, isAdmin, getallUser);
router.get("/get-orders", authMiddleware, getOrders);
router.get("/getallorders", authMiddleware, getAllOrders);
router.post("/getorderbyuser/:id", authMiddleware, isAdmin, getOrderByUserId);
router.get("/refresh", handleRefreshToken);
router.get("/logout", logout);
router.get("/wishlist", authMiddleware, getWishlist);
router.get("/cart", authMiddleware, getUserCart);
router.delete("/empty-cart", authMiddleware, emptyCart);
router.get("/:id", authMiddleware, isAdmin, getaUser);
router.delete("/:id", deletedUser);

router.put("/edit-user", authMiddleware, updatedUser);
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);
router.put("/save-address", authMiddleware, saveAddress);

module.exports = router;
