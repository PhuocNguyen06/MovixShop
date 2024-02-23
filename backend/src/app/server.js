const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const port = 8000;
const cors = require('cors')
const morgan = require('morgan');
const dbConnect = require('./config/dbConnect');
const dotenv = require('dotenv').config();
const authRouter = require('./routes/authRoute');
const productRoute = require('./routes/productRoute');
const blogRoute = require('./routes/blogRoute');
const categoryRoute = require('./routes/prodcategoryRoute');
const blogcategoryRoute = require("./routes/blogCatRoute");
const brandRoute = require("./routes/brandRoute")
const couponRoute = require("./routes/couponRoute");
const colorRouter = require("./routes/colorRoute");
const enquiryRoute = require("./routes/enqRoute");
const vnpayRoute = require("./routes/vnpayRoute");
const { notFound, errorHandler } = require("./middleware/errorHandler");
const cookieParser = require('cookie-parser');
const passportStrategy = require('./config/passport');
const passport = require('passport');
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

dbConnect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
}))
app.use(morgan('dev'))
app.use(cookieParser());
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/product", productRoute);
app.use("/api/v1/blog", blogRoute);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/blogcategory", blogcategoryRoute);
app.use("/api/v1/brand", brandRoute);
app.use("/api/v1/coupon", couponRoute);
app.use("/api/v1/color", colorRouter);
app.use("/api/v1/enquiry", enquiryRoute);
app.use("/api/v1/vnpay", vnpayRoute);
// app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc));

app.use(notFound);
app.use(errorHandler);
app.listen(port, ()=>{
    console.log(`App listening on port http://localhost:${port}`)
});
