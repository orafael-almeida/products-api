const express = require("express");
const dotenv = require("dotenv");
const { v4: uuid4 } = require("uuid");

dotenv.config();

const productsRepository = [
  { id: uuid4(), productName: "Warwick", quantity: 5 },
  { id: uuid4(), productName: "Ahri", quantity: 10 },
  { id: uuid4(), productName: "Yasuo", quantity: 7 },
  { id: uuid4(), productName: "Garen", quantity: 12 },
];
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.get("/products", function (req, res) {
  return res.json(productsRepository);
});

app.post("/products", function (req, res) {
  const { productName, quantity } = req.body;

  if (!productName || !quantity) {
    return res
      .status(404)
      .json({ message: "productName and quantity are required!" });
  }

  const product = {
    id: uuid4(),
    productName,
    quantity,
  };

  productsRepository.push(product);

  return res.status(201).json(product);
});

app.delete("/products/:id", function (req, res) {
  const { id } = req.params;
  const productIndex = productsRepository.findIndex(
    (product) => product.id === id
  );

  if (productIndex < 0) {
    return res.status(404).json({ message: "Product not found" });
  }

  productsRepository.splice(productIndex, 1);

  return res.status(204).send();
});

app.put("/products/:id", function (req, res) {
  const { id } = req.params;
  const { productName, quantity } = req.body;

  if (!productName && !quantity) {
    return res
      .status(400)
      .json({ message: "At least productName or quantity is required!" });
  }

  const productIndex = productsRepository.findIndex(
    (product) => product.id === id
  );

  if (productIndex < 0) {
    return res.status(404).json({ message: "Product not found" });
  }

  const product = {
    ...productsRepository[productIndex],
    id,
    productName: productName ?? productsRepository[productIndex].productName,
    quantity: quantity ?? productsRepository[productIndex].quantity,
  };

  productsRepository[productIndex] = product;

  return res.json({ updated: product });
});

app.listen(port, () => {
  console.log(`✅ API Running on port ${port}`);
});
