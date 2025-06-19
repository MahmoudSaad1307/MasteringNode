const express = require("express");
const app = express();
const {body:validateBody,validationResult} = require("express-validator");
app.use(express.json())


app.get("/api/products", getCourses);
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
  validateBody("title").notEmpty().withMessage("Title is required").isLength({ min: 3 }),


);

app.listen(1307, () => console.log("Working"));
