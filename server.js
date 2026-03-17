const express = require("express");
const app = express();


// Middleware to read JSON
app.use(express.json());


// Import routes
const productRoutes = require("./routes/productRoutes");


// Use routes
app.use("/", productRoutes);


// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});