const User = require("../models/users.model");
const status = require("../utils/httpStatusText");
const asyncHandler = require("../middleware/asyncWrapper");
const AppError = require("../utils/appError");
const getAllUsers = asyncHandler(async (req,res)=>{
const users=await Users.
})
const registerUser=asyncHandler(async (req,res)=>{});
const loginUser=asyncHandler(async (req,res)=>{});

module.exports = { getAllUsers, registerUser, loginUser };