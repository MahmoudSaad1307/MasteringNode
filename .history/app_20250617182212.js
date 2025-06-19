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
app.get("api/product/1",(req,res)=>{
  try {
    // const id =req.params.id;
    const product=products.find(p=>p.id===1);
    res.json(product)
  } catch (error) {
    console.log(error.message);

    
  }
// const id =req.params.id;
// const product=products.find(p=>p.id===id);
// res.json(product)

})

app.listen(1307, () => console.log("Working"));
