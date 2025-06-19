const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const status = require("./utils/httpStatusText");
const productsRouter = require("./routes/products.route");

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Route handler
app.use("/api/products", productsRouter);

// Catch-all for unknown routes
app.all("*", (req, res) => {
  res.status(404).json({
    status: status.ERROR,
    message: "Route not found"
  });
});

// Connect to MongoDB
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI)
  .then(() => console.log("Connected to DB"))
  .catch(err => console.error("MongoDB connection error:", err));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
