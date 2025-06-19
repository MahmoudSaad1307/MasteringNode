const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());
const mongoose = require("mongoose");
log
const MONGO_URI =process.env.MONGO_URI;
const PORT=process.env.PORT;

mongoose.connect(MONGO_URI).then(() => console.log("Connected to DB"));
const productsRouter = require("./routes/products.route");
app.use("/api/products", productsRouter);

app.listen(PORT, () => console.log("Working"));
