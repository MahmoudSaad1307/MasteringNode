const express = require("express");
const app = express();
const productsController = require("./controllers/products.controllers");
const { body: validateBody } = require("express-validator");
app.use(express.json());



app.listen(1307, () => console.log("Working"));
