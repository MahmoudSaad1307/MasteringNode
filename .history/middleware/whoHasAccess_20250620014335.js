const AppError = require("../utils/appError")

module.exports=(...roles)=>{
console.log('roles',roles)
  
  return (req,res,next) =>{
if(!roles.includes(req.currentUser.role)){
throw new AppError("")

}
    console.log('whoHasAccess',req.currentUser.role)
    next()
  }
  // return 
}