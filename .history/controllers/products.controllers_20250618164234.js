const { validationResult } = require("express-validator");
const Product = require("../models/Product.model");
const getAllProducts = async (req, res) => {
try {
    const products = await Product.find();
  res.json({"status":"success","data":products});
} catch (error) {
  res
}
};
const getProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    if (!product)
      return res.status(404).json(`Product with id ${id} not found`);

    res.json(product);
  } catch (error) {
    res.json(error.message);
  }
};
const addProduct = async (req, res) => {
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
const updateProduct = async (req, res) => {
  const id = req.params.id;

  try {
    const product = await Product.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    product.save();
    return res.json(product);
  } catch (error) {
    res.json(error.message);
  }
};
const deleteProduct = async (req, res) => {
  const id = req.params.id;

  try {
    const product = await Product.findByIdAndDelete(id);
    if (!product)
      return res.status(404).json(`Product with id ${id} not found`);

    res.json({ success: true, product });
  } catch (error) {
    res.json(error.message);
  }
};
module.exports = {
  getAllProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
};
