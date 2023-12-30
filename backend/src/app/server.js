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
const blogcategoryRoute = require("./routes/blogCatRoute")
const { notFound, errorHandler } = require("./middleware/errorHandler");
const cookieParser = require('cookie-parser');


dbConnect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use(morgan('dev'))
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/product", productRoute);
app.use("/api/blog", blogRoute);
app.use("/api/category", categoryRoute)
app.use("/api/blogcategory", blogcategoryRoute)

app.use(notFound);
app.use(errorHandler);
app.listen(port, ()=>{
    console.log(`App listening on port http://localhost:${port}`)
})
