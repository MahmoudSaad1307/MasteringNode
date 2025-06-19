const { Schema, model} = require("mongoose");

const userSchema=new Schema({
name:{
  type:String,
  required:true
}
email:{
  type
}

});


module.exports=model("User",userSchema);