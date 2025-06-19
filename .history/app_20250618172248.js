const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
const MONGO_URI =process.env.MONGO_URI;

mongoose.connect(MONGO_URI).then(() => console.log("Connected to DB"));
const productsRouter = require("./routes/products.route");
app.use("/api/products", productsRouter);
c
app.listen(1307, () => console.log("Working"));
