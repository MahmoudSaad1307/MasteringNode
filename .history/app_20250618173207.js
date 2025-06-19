const express = require("express");
require("dotenv").config();
const productsRouter = require("./routes/products.route");
const status = require("./utils/httpStatusText");

const app = express();
app.use(express.json());
app.use("/api/products", productsRouter);
app.all("*", (req, res, next) => {
  res.json({ status: status.ERROR, message: "Route not found" });
});
const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

mongoose.connect(MONGO_URI).then(() => console.log("Connected to DB"));

app.listen(PORT, () => console.log("Working"));
