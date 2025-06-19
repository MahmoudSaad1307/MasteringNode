module.exports=(...roles)=>{

  return (req,res,next) =>{
    console.log('whoHasAccess')
    next()
  }
  // return 
}