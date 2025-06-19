const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeaders = req.headers["authorization"] ;
  console.log("authHeaders : ",authHeaders);
  
  const token = authHeaders.split(' ')[1];
  const verifiedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
  console.log(verifiedToken);
  
  next();
};
module.exports = verifyToken;
