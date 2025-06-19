const express = require("express");
const app = express();
const {body:validateBody,validationResult} = require("express-validator");
app.use(express.json())
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
app.get("/api/products/:id",(req,res)=>{
  try {
    const id =+req.params.id;
    const product=products.find(p=>p.id===id);
    if (!product) res.status(404).json(`Product with id ${id} not found`);
    res.json(product)
  } catch (error) {
    res.json(error.message);

    
  }


})

app.post(
  "/api/products",
  validateBody["title").notEmpty().isLength({ min: 3 }),

  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json(errors.array());
    }
    console.log(req.body);
    try {
      const product = req.body;
      product.id = products.length + 1;

      products.push(product);
      res.json(products);
    } catch (error) {
      res.json(error.message);
    }
  }
);

app.listen(1307, () => console.log("Working"));
