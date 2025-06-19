const express = require("express");
const app = express();
const productsRouter = require("./routes/products.route");
app.use("/", productsRouter);
app.use(express.json());



app.listen(1307, () => console.log("Working"));
