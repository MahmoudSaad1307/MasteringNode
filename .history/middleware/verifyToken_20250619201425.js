const verifyToken = (req, res, next) => {
  const authHeaders=req.headers.authorization;
  const token=authHeaders.split(' ')[1];
  if(token){
    next();
  }else{
    res.status(401).json({message:'token is not provided'});
  } 
}