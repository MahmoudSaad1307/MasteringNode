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
  if (!name || !email || !password) {
    throw new AppError( "Please provide all the fields", 400);
  }
  const user = new User({ name, email, password },);
  await user.save();

  res.status(201).json({ status: status.SUCCESS, data: { user } });
});
const loginUser = asyncHandler(async (req, res) => {});

module.exports = { getAllUsers, registerUser, loginUser };
