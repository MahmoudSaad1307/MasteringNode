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
    throw new AppError(status.FAIL, "Please provide all the fields");
  }
});
const loginUser = asyncHandler(async (req, res) => {});

module.exports = { getAllUsers, registerUser, loginUser };
