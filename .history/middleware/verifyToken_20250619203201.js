const jwt = require("jsonwebtoken");
const AppError = require("../utils/appError");
const status = require("../utils/httpStatusText");
const verifyToken = (req, res, next) => {
  const authHeaders = req.headers.authorization || req.headers.Authorization;
  // console.log("authHeaders : ",authHeaders);
  if(!authHeaders || !authHeaders.startsWith("Bearer")){
    throw new AppError("Token is required", 401,status.ERROR);
  }
  const token = authHeaders.split(' ')[1];
  try {
    
  jwt.verify(token, process.env.JWT_SECRET_KEY);
  } catch (error) {
    
    throw new AppError("Invalid token", 401,status.ERROR);
  }
    
  
  
  next();
};
module.exports = verifyToken;
