const express = require("express");
const app = express();
app.use(express.json());
const mongoose=require("mongoose");
cont MONGOOSE_URI="mongodb+srv://admin:admin@cluster0.32h3z.mongodb.net/ecommerce?retryWrites=true&w=majority";
mongoose.connect(

const productsRouter = require("./routes/products.route");
app.use("/api/products", productsRouter);



app.listen(1307, () => console.log("Working"));
