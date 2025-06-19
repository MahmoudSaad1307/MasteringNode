const { validationResult } = require("express-validator");
const Product = require("../models/Product.model");
const getAllCourses = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};
const getCourse = (req, res) => {
  try {
    const id = +req.params.id;
    const product = P.findB((p) => p.id === id);
    if (!product)
      return res.status(404).json(`Product with id ${id} not found`);
    console.log("product", product); // 4 debugging

    res.json(product);
  } catch (error) {
    res.json(error.message);
  }
};
const addCourse = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors.array());
  }
  console.log(req.body);
  try {
    const product = new Product(req.body);
    await product.save();
    res.json(product);
  } catch (error) {
    res.json(error.message);
  }
};
module.exports = {
  getAllCourses,
  getCourse,
  addCourse,
};
