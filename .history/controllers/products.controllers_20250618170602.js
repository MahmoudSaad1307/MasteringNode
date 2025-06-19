const { validationResult } = require("express-validator");
const Product = require("../models/Product.model");
const status = require("./utils/httpStatusText");
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({price:{$gt:10}},{__v:5},{});
    res.json({ status: status.SUCCESS, data: { products } });
  } catch (error) {
    res.json({ status: status.ERROR, message: error.message });
  }
};
const getProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    if (!product)
      return res.status(404).json({status:status.FAIL, data:null,message: `Product with id ${id} not found` });

    res.json({ success: status.SUCCESS, data: { product } });
  } catch (error) {
    res.json({ status: status.ERROR, message: error.message });
  }
};
const addProduct = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({status:status.FAIL,errors:errors.array()});
  }
  console.log(req.body);
  try {
    const product = new Product(req.body);
    await product.save();
    res.json({ success: status.SUCCESS, data: { product } });
  } catch (error) {
    res.json({ status: status.ERROR, message: error.message });
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
    return res.json({ success: status.SUCCESS, data: { product } });
  } catch (error) {
    res.json({ status: status.ERROR, message: error.message });
  }
};
const deleteProduct = async (req, res) => {
  const id = req.params.id;

  try {
    const product = await Product.findByIdAndDelete(id);
    if (!product)
      return res.status(404).json({
        status: status.FAIL,
        data: null,
        message: `Product with id ${id} not found`,
      });

    res.json({ status: status.SUCCESS, data: null });
  } catch (error) {
    res.json({ status: status.ERROR   , message: error.message });
  }
};
module.exports = {
  getAllProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
};
