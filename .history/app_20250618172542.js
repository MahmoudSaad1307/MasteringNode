const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());
const mongoose = require("mongoose");
const MONGO_URI =process.env.MONGO_URI;
const PORT=process.env.PORT;

mongoose.connect(MONGO_URI).then(() => console.log("Connected to DB"));
const productsRouter = require("./routes/products.route");
app.use("/api/products", productsRouter);

app.listen(process.env.PORT, () => console.log("Working"));
