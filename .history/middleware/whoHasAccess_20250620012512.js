module.exports=(req,res,next)=>{
  req.user="admin";
  next();
}