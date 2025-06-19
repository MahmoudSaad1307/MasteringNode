const verifyToken = (req, res, next) => {
  const authHeaders=req.headers.authorization;
  const token=authHeaders.split(' ')[1];
  next()
  
}