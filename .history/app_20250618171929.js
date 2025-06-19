const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
const MONGOOSE_URI =
  ;

mongoose.connect(MONGOOSE_URI).then(() => console.log("Connected to DB"));
const productsRouter = require("./routes/products.route");
app.use("/api/products", productsRouter);

app.listen(1307, () => console.log("Working"));
