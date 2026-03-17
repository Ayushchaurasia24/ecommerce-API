const productService = require("../services/productService");

// Controller to get all products
exports.getProducts = (req,res)=>{

    const result = productService.getAllProducts();

    res.send(result);
};

//by id
exports.getProduct = (req, res) => {

  const id = req.params.id;

  const result = productService.getProductById(id);

  res.send(result);
};

//add new prod
exports.createProduct = (req, res) => {

  const productData = req.body; //get prod data form request boduy

  const result = productService.addProduct(productData);

  res.send(result);
};

