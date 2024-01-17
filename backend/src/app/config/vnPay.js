const vnpay = require('vn-payments');

const config = {
  vnp_TmnCode: process.env.VNPAY_TMNCODE,
  vnp_HashSecret:process.env.VNPAY_HASH_SECRET,
  vnp_Url: 'https://sandbox.vnpayment.vn/paymentv2/vpcpay.html',
  vnp_ReturnUrl: 'http://localhost:3000/api/vnpay-return',
};

module.exports = config;
