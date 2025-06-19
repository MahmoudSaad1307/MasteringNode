const jwt = require("jsonwebtoken");
const AppError = require("../utils/appError");
const status = require("../utils/httpStatusText");



const verifyToken = (req, res, next) => {
  const authHeaders = req.headers.authorization || req.headers.Authorization;
  // console.log("authHeaders : ",authHeaders);
  if (!authHeaders || !authHeaders.startsWith("Bearer")) {
    throw new AppError("Token is required", 401, status.ERROR);
  }
  const token = authHeaders.split(" ")[1];
  try {
    const currentUser = jwt.verify(token, process.env.JWT_SECRET_KEY);
req.cu
    // console.log("currentUser : ",currentUser);
    
  } catch (error) {
    throw new AppError("invalid token", 401, status.ERROR);
  }

  next();
};
module.exports = verifyToken;
