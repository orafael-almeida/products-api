const express = require("express");
const dotenv = require("dotenv");
const productRoutes = require("../modules/products/product.routes");

dotenv.config();

const app = express();
app.use(express.json());

app.use("/products", productRoutes);

module.exports = app;
