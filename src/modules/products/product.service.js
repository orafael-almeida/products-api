const { v4: uuid4 } = require("uuid");
const productsRepository = require("../../infra/data/product.repository");

const getAllProducts = () => {
  return productsRepository;
};

const createProduct = ({ productName, quantity }) => {
  const product = {
    id: uuid4(),
    productName,
    quantity,
  };

  productsRepository.push(product);
  return product;
};

const deleteProduct = (id) => {
  const productIndex = productsRepository.findIndex(
    (product) => product.id === id
  );

  if (productIndex < 0) {
    return false;
  }

  productsRepository.splice(productIndex, 1);
  return true;
};

const updateProduct = (id, { productName, quantity }) => {
  const productIndex = productsRepository.findIndex(
    (product) => product.id === id
  );

  if (productIndex < 0) {
    return null;
  }

  const product = {
    ...productsRepository[productIndex],
    productName: productName ?? productsRepository[productIndex].productName,
    quantity: quantity ?? productsRepository[productIndex].quantity,
  };

  productsRepository[productIndex] = product;

  return product;
};

module.exports = {
  getAllProducts,
  createProduct,
  deleteProduct,
  updateProduct,
};
