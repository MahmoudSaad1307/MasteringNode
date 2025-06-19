const products = require("../data/products");
const {validationResult } = require("express-validator");

const getAllCourses = (req, res) => {
  res.json(products);
};
const getCourse = (req, res) => {
  try {
    const id = +req.params.id;
    const product = products.find((p) => p.id === id);
    if (!product) res.status(404).json(`Product with id ${id} not found`);
    res.json(product);
  } catch (error) {
    res.json(error.message);
  }
};
const addCourse = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const product = req.body;
    if (!product.title) {
      return res.status(400).json({ message: "Title is required" });
    }
    product.id = products.length + 1;
    products.push(product);
    res.status(201).json(product); // Return the added product
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
module.exports={
  getAllCourses,
  getCourse,
  addCourse
} 