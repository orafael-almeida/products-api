const express = require("express");
const productController = require("./product.controller");

const router = express.Router();

router.get("/", productController.getProducts);
router.post("/", productController.createProduct);
router.delete("/:id", productController.deleteProduct);
router.put("/:id", productController.updateProduct);

module.exports = router;
