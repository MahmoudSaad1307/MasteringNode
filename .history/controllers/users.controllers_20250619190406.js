const User = require("../models/User.model");
const status = require("../utils/httpStatusText");
const asyncHandler = require("../middleware/asyncWrapper");
const AppError = require("../utils/appError");
const bcrypt = require("bcryptjs");
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find({},{__v:false});

  res.json({ status: status.SUCCESS, data: { users } });
});
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const oldUser=await User.findOne({email})
  if(oldUser){
    throw new AppError("User already exists",400)
  }
  if (!name || !email || !password) {
    throw new AppError("Please provide all the fields", 400);
  }
  b
  const newUser = new User({ name, email, password });
  await newUser.save();

  res.status(201).json({ status: status.SUCCESS, data: { newUser } });
});
const loginUser = asyncHandler(async (req, res) => {});

module.exports = { getAllUsers, registerUser, loginUser };
