const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeaders=req.headers.authorization;
  const token=authHeaders.split(' ')[1];
  const  verified
  next()
  
}
module.exports = verifyToken;