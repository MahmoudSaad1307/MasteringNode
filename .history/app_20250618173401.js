const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

const productsRouter = require("./routes/products.route");
const status = require("./utils/httpStatusText");

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/api/products", productsRouter);

// Catch-all for undefined routes
// app.all("*", (req, res) => {
//   res.status(404).json({
//     status: status.ERROR,
//     message: "Route not found"
//   });
// });

// Connect to DB then start server
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 3000;

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("Connected to DB");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error("Failed to connect to MongoDB:", err);
  });
