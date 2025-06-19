module.exports=(...roles)=>{
console.log('roles',roles)
  
  return (req,res,next) =>{
if(!roles.includes(req.c))
    console.log('whoHasAccess',req.currentUser.role)
    next()
  }
  // return 
}