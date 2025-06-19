const express = require("express");
const app = express();
const productsRouter = require("./routes/products.route");
a
app.use(express.json());



app.listen(1307, () => console.log("Working"));
