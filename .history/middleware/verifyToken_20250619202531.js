const jwt = require("jsonwebtoken");
const AppError = require("../utils/appError");

const verifyToken = (req, res, next) => {
  const authHeaders = req.headers.authorization || req.headers.Authorization;
  // console.log("authHeaders : ",authHeaders);
  if(!authHeaders || !authHeaders.startsWith("Bearer")){
    
  }
  const token = authHeaders.split(' ')[1];
  const verifiedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
  if(!verifiedToken){
    console.log("asdkljklsdjklklj");
    
    throw new AppError("Invali token", 401);
  
  }
  console.log("verifiedToken : ",verifiedToken);
  
  next();
};
module.exports = verifyToken;
