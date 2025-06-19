const express = require("express");
const app = express();

const products = [{

  id:1,
  title: "Product 1",
  price: 100
}, {

  id:2,
  title: "Product 2",
  price: 200
}];

app.get("/api/products", (req, res) => {
  res.json(products);
});
app.get("api/product/:id",(req,res)=>{
const id =req.params.id;
const product=products.

})

app.listen(1307, () => console.log(""));
