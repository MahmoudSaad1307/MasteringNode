const products = require("../data/products");
const {validationResult } = require("express-validator");

const getAllCourses = (req, res) => {
  res.json(products);
};
const getCourse = (req, res) => {
  try {
    const id = +req.params.id;
    const product = products.find((p) => p.id === id);
    if (!product)  res.status(404).json(`Product with id ${id} not found`);
    console.log("product", product);
    
    res.json(product);
  } catch (error) {
    res.json(error.message);
  }
};
const addCourse = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors.array());
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
};
module.exports={
  getAllCourses,
  getCourse,
  addCourse
} 