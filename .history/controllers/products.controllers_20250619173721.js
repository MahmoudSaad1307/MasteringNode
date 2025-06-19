const { validationResult } = require("express-validator");
const Product = require("../models/Product.model");
const status = require("../utils/httpStatusText");
const asyncHandler = require("../middleware/asyncWrapper");
const getAllProducts = asyncHandler(async (req, res) => {
  const limit=req.query.limit||6;
  const page=req.query.page||1;
  const skip=(page-1)*limit;
    const products = await Product.find({}, { __v: false }, {}).limit(limit).skip(skip);
    res.json({ status: status.SUCCESS, data: { products } });
  
});
const getProduct = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const product = await Product.findById(id);
    if (!product){
      const error = new Error(`Product with id ${id} not found`);
  error.statusCode = 404;
  throw error;
    }

    res.json({ success: status.SUCCESS, data: { product } });
  
});
const addProduct = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const msg = errors.array().map((err) => err.msg).json('|');
   const error = new Error(`Invalid input data `);
    error.statusCode = 400;
    error.errors = errors.array(); 
    throw error;
  }
  console.log(req.body);
    const product = new Product(req.body);
    await product.save();
    res.json({ success: status.SUCCESS, data: { product } });
  
};
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
    if (!product)
      return res.status(404).json({
        status: status.FAIL,
        data: null,
        message: `Product with id ${id} not found`,
      });

    res.json({ status: status.SUCCESS, data: null });
  
};
module.exports = {
  getAllProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
};
