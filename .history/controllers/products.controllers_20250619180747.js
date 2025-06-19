const { validationResult } = require("express-validator");
const Product = require("../models/Product.model");
const status = require("../utils/httpStatusText");
const asyncHandler = require("../middleware/asyncWrapper");
const AppError = require("../utils/appError");
const getAllProducts = asyncHandler(async (req, res) => {
  const limit = req.query.limit || 6;
  const page = req.query.page || 1;
  const skip = (page - 1) * limit;
  const products = await Product.find({}, { __v: false }, {})
    .limit(limit)
    .skip(skip);
  res.json({ status: status.SUCCESS, data: { products } });
});
const getProduct = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  if (!product) {
    throw new AppError(`Product with id ${id} not found`, 404);
  }

  res.json({ success: status.SUCCESS, data: { product } });
});
const addProduct = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const msg = errors
      .array()
      .map((err) => err.msg)
      .join(" | ");

    throw new AppError(`Invalid input data ${msg}`, 400);
  }
  console.log(req.body);
  const product = new Product(req.body);
  await product.save();
  res.json({ success: status.SUCCESS, data: { product } });
};)
const updateProduct = async (req, res) => {
  const id = req.params.id;

  const product = await Product.findByIdAndUpdate(
    id,
    { $set: req.body },
    { new: true }
  );
  product.save();
  return res.json({ success: status.SUCCESS, data: { product } });
};
const deleteProduct = async (req, res) => {
  const id = req.params.id;

  const product = await Product.findByIdAndDelete(id);
  if (!product) {
    throw new AppError(`Product with id ${id} not found`, 404);
  }

  res.json({ status: status.SUCCESS, data: null });
};
module.exports = {
  getAllProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
};
