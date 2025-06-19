const { Schema, model} = require("mongoose");

const userSchema=new Schema({
name:{
  type:String,
  required:true
}
email:{
  type:String,
  required:true,
  uni
}

});


module.exports=model("User",userSchema);