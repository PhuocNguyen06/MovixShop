const express = require("express");
const router = express.Router();
const {
    createPaymentUrl
    } = require("../controllers/vnpayController")


router.post('/create_payment_url', createPaymentUrl)
// router.get('/vnpay_ipn',);
// router.get('/vnpay_return',);
module.exports = router;