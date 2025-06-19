const jwt = require("jsonwebtoken");
const AppError = require("../utils/appError");

const verifyToken = (req, res, next) => {
  const authHeaders = req.headers.authorization || req.headers.Authorization;
  // console.log("authHeaders : ",authHeaders);
  if(!authHeaders || !authHeaders.startsWith("Bearer")){
    throw new AppError("Invalid token", 401);
  }
  const token = authHeaders.split(' ')[1];
  const verifiedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    
    throw new AppError("Invalid token", 401);
  
  
  next();
};
module.exports = verifyToken;
