const { Schema, model} = require("mongoose");

const userSchema=new Schema({
name:{
  type:String,
  required:true
}
email:

});


module.exports=model("User",userSchema);