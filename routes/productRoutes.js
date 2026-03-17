const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

// GET all products
router.get("/products", productController.getProducts);

// GET single product by ID
router.get("/products/:id", productController.getProduct);

// POST new product
router.post("/products", productController.createProduct);

module.exports = router;