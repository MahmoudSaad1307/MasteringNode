const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());
app.all("*", (req, res, next) => { return res.status(200).json({ status: status.ERROR, message: "Route not found" }); });
const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

mongoose.connect(MONGO_URI).then(() => console.log("Connected to DB"));
const productsRouter = require("./routes/products.route");
app.use("/api/products", productsRouter);

app.listen(PORT, () => console.log("Working"));
