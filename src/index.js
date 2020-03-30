const express = require("express");
require("./db/mongoose");
const User = require("./db/models/User");
const Product = require("./db/models/Product");
const authRouter = require("./routers/authRoutes");
const productRouter = require("./routers/productRoutes");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(authRouter);
app.use(productRouter);

app.listen(port, () => {
  console.log("server is on on port " + port);
});
