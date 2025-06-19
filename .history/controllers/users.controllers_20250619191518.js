const User = require("../models/User.model");
const status = require("../utils/httpStatusText");
const asyncHandler = require("../middleware/asyncWrapper");
const AppError = require("../utils/appError");
const bcrypt = require("bcryptjs");
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find({}, { __v: false, password: false });

  res.json({ status: status.SUCCESS, data: { users } });
});
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const oldUser = await User.findOne({ email });
  if (oldUser) {
    throw new AppError("User already exists", 400);
  }
  if (!name || !email || !password) {
    throw new AppError("Please provide all the fields", 400);
  }
  const hashedPassword = await bcrypt.hash(password, 11);
  const newUser = new User({ name, email, password: hashedPassword });
  await newUser.save();
  const userWithoutPassword = newUser.toObject();
  delete userWithoutPassword.password;
  delete userWithoutPassword.__v;

  res
    .status(201)
    .json({ status: status.SUCCESS, data: { userWithoutPassword } });
});
const loginUser = asyncHandler(async (req, res) => {
const user=
 


});

module.exports = { getAllUsers, registerUser, loginUser };
