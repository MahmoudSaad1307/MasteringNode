module.exports=(...roles)=>{
console.log('roles',roles)
  
  return (req,res,next) =>{
if
    console.log('whoHasAccess',req.currentUser.role)
    next()
  }
  // return 
}