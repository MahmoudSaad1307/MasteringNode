const Users = require("../models/users.model");
const status = require("../utils/httpStatusText");
const asyncHandler = require("../middleware/asyncWrapper");
const AppError = require("../utils/appError");
const getAllUsers = asyncHandler(async (req,res)=>{

})
const registerUser=asyncHandler(async (req,res)=>{});
const loginUser=asyncHandler(async (req,res)=>{});

module.exports = { getAllUsers };