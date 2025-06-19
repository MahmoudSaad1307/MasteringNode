const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeaders = req.headers.authorization || req.headers.Authorization;
  // console.log("authHeaders : ",authHeaders);
  
  const token = authHeaders.split(' ')[1];
  const verifiedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
  if
  console.log("verifiedToken : ",verifiedToken);
  
  next();
};
module.exports = verifyToken;
