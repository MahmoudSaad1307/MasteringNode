const express = require("express");
const app = express();
app.use(express.json());
const productsRouter = require("./routes/products.route");
app.use("/api/products", productsRouter);



app.listen(1307, () => console.log("Working"));
