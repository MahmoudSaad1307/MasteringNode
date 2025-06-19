const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeaders=req.headers.authorization;
  const token=authHeaders.split(' ')[1];
  const  veri
  next()
  
}
module.exports = verifyToken;