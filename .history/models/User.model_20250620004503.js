const e = require("express");
const { Schema, model } = require("mongoose");
const validator = require("validator");
const { ADMIN, USER } = require("../utils/userRoles");
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    validate: [validator.isEmail],
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    // required:true
  },
  token:String,
  createdAt:{
    type:Date,
    default:Date.now
  },
  role:{
    type:String,
    enum:[ADMIN,USER],
    default:USER
  }
});

module.exports = model("User", userSchema);
