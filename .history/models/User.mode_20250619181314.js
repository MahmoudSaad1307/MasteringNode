const { Schema, model} = require("mongoose");

const userSchema=new Schema({
name:{
  type:String,
  required:true
},
email:{
  type:String,
  required:true,
  unique:true
}
pass

});


module.exports=model("User",userSchema);