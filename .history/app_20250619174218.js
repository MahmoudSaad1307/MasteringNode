const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors")
const status=require("./utils/httpStatusText");

const productsRouter = require("./routes/products.route");

const app = express();

// Environment variables
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/products", productsRouter);

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    status: err.status || status.ERROR,
    
    message: err.message || "Internal Server Error",
  });
});


// Catch-all for undefined routes
// app.all("*", (req, res) => {
//   res.status(404).json({
//     status: "",
//     message: "Route not found"
//   });
// });

// Database connection and server start
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("Connected to DB");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error("Failed to connect to MongoDB:", err);
  });