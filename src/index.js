const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const productsRepository = [{ id: 1, productName: "Warwick" }];
const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.get("/products", function (req, res) {
  return res.json(productsRepository);
});

app.listen(port, () => {
  console.log(`✅ API Running on port ${port}`);
});
