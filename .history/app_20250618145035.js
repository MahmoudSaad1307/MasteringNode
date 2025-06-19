const express = require("express");
const app = express();
app.use(express.json());
const mongoose=require("mongoose");
const MONGOOSE_URI="mongodb+srv://Malik:Malik20@cluster0.49odtnt.mongodb.net/";

mongoose.connect(MONGOOSE_URI, {
  
});
const productsRouter = require("./routes/products.route");
app.use("/api/products", productsRouter);



app.listen(1307, () => console.log("Working"));
