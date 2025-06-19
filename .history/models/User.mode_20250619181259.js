const { Schema, model} = require("mongoose");

const userSchema=new Schema({
name:{
  type:String,
  required:true
}
email:{
  type:String,
  req
}

});


module.exports=model("User",userSchema);