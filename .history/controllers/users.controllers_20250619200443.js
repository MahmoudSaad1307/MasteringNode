const User = require("../models/User.model");
const status = require("../utils/httpStatusText");
const asyncHandler = require("../middleware/asyncWrapper");
const AppError = require("../utils/appError");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

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
  const token = await jwt.sign(
    { id: newUser._id, email: newUser.email },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "1d" }
  );
  console.log(token);
  newUser.token = token;

  await newUser.save();
  const userWithoutPassword = newUser.toObject();
  delete userWithoutPassword.password;
  delete userWithoutPassword.__v;

  res
    .status(201)
    .json({ status: status.SUCCESS, data: { user: userWithoutPassword } });
});
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!email || !password) {
    throw new AppError("Please provide the email and password", 400);
  }
  if (!user) {
    throw new AppError("Incorrect Email or Password", 400);
  }

  const matchedPassword = await bcrypt.compare(password, user.password);
  if (!matchedPassword) {
    throw new AppError("Incorrect Email or Password", 400);
  }
    const token = await jwt.sign(
    { id: newUser._id, email: newUser.email },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "1d" }
  );
  console.log(token);
  newUser.token = token;
  const userWithoutPassword = user.toObject();
  delete userWithoutPassword.password;
  delete userWithoutPassword.__v;
  res
    .status(200)
    .json({ status: status.SUCCESS, data: { user: userWithoutPassword } });
});

module.exports = { getAllUsers, registerUser, loginUser };
