const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const productsRepository = [{ id: 1, productName: "Warwick", quantity: 5 }];
const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.get("/products", function (req, res) {
  return res.json(productsRepository);
});

app.post("/products", function (req, res) {
  const { productName, quantity } = req.body;
  const product = {
    id: 1,
    productName,
    quantity,
  };

  productsRepository.push(productName);

  return res.status(201).json(product);
});
app.listen(port, () => {
  console.log(`✅ API Running on port ${port}`);
});
