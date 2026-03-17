const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" },
  { id: 3, name: "Mouse" }
];

exports.getAllProducts = () => {

  // Business logic happens here
  return "Fetching all products";
};


exports.getProductById = (id) => {
  // Logic to fetch product using ID
  return `Fetching product with ID: ${id}`;
};

exports.addProduct = (productData) => {
  // Logic for adding product
  return "Adding a new product";
};