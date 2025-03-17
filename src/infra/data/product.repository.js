const { v4: uuid4 } = require("uuid");

const PRODUCTS_MOCK = [
  { id: uuid4(), productName: "Warwick", quantity: 5 },
  { id: uuid4(), productName: "Ahri", quantity: 10 },
  { id: uuid4(), productName: "Yasuo", quantity: 7 },
  { id: uuid4(), productName: "Garen", quantity: 12 },
];

module.exports = PRODUCTS_MOCK;
