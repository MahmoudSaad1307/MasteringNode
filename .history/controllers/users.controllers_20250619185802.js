const User = require("../models/User.model");
const status = require("../utils/httpStatusText");
const asyncHandler = require("../middleware/asyncWrapper");
const AppError = require("../utils/appError");
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find();

  res.json({ status: status.SUCCESS, data: { users } });
});
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const user=await User.findOne({email})
  if(user){
    throw new AppError("User already exists",400)
  }
  if (!name || !email || !password) {
    throw new AppError("Please provide all the fields", 400);
  }
  const newUser = new User({ name, email, password });
  await newUser.save();

  res.status(201).json({ status: status.SUCCESS, data: { newUser } });
});
const loginUser = asyncHandler(async (req, res) => {});

module.exports = { getAllUsers, registerUser, loginUser };
