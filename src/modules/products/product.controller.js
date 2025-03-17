const { v4: uuidv4 } = require("uuid");
const productService = require("./product.service");

const getProducts = (req, res) => {
  const products = productService.getAllProducts();
  return res.json(products);
};

const createProduct = (req, res) => {
  const { productName, quantity } = req.body;

  if (!productName || !quantity) {
    return res
      .status(404)
      .json({ message: "productName and quantity are required" });
  }

  const product = productService.createProduct({ productName, quantity });

  return res.status(201).json(product);
};

const deleteProduct = (req, res) => {
  const { id } = req.params;
  const result = productService.deleteProduct(id);

  if (!result) {
    return res.status(404).json({ message: "product not found" });
  }

  return res.status(204).send();
};

const updateProduct = (req, res) => {
  const { id } = req.params;
  const { productName, quantity } = req.body;

  if (!productName && !quantity) {
    return res
      .status(400)
      .json({ message: "At least productName or quantity is required" });
  }

  const product = productService.updateProduct(id, { productName, quantity });

  if (!product) {
    return res.status(404).json({ message: "product not found" });
  }

  return res.json({ updated: product });
};

module.exports = {
  getProducts,
  createProduct,
  deleteProduct,
  updateProduct,
};
