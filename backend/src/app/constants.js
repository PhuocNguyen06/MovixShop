const USER = {
  GENDER: {
    MALE: "male",
    FEMALE: "female",
    OTHER: "other",
  },
  ROLE: {
    ADMIN: "admin",
    STAFF: "staff",
    CUSTOMER: "user",
  },
};

const ORDER = {
  STATUS: {
    PENDING: "pending", // order created, waiting for confirm by admin or staff
    CONFIRMED: "confirmed", // order confirmed by admin or staff
    SHIPPING: "shipping", // order has been picked up by staff and is being shipped
    COMPLETED: "completed", // order has been delivered
    CANCELLED: "cancelled", // order has been cancelled
  },
  PAYMENT_METHOD: {
    CASH: "cash", // paid at store
    COD: "cod", // paid at delivery (cash on delivery)
    VNPAY: "vnpay", // paid by VNPAY
    MOMO: "momo", // paid by Momo
    PAYPAL: "paypal", // paid by Paypal
    ZALO_PAY: "zalopay", // paid by Zalo PAY
  },
  PAYMENT_STATUS: {
    PENDING: "pending", // payment is pending
    PAID: "paid", // payment has been made
    CANCELLED: "cancelled", // payment has been cancelled
  },
};

/* eslint-disable */
const allowImageMineTypes = [
  "image/bmp", // .bmp       - Windows OS/2 Bitmap Graphics
  "image/jpeg", // .jpeg .jpg - JPEG images
  "image/png", // ..png      - Portable Network Graphics
  "image/gif", // .gif       - Graphics Interchange Format (GIF)
  "image/tiff", // .tif .tiff - Tagged Image File Format (TIFF)
  "image/svg+xml", // .svg       - Scalable Vector Graphics (SVG)
  "image/vnd.microsoft.icon", // .ico       - Icon format
  "image/x-icon", // same above
];
// read more at: https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types

module.exports = {
  USER,
  ORDER,
  allowImageMineTypes,
};
