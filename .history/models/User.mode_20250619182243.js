const { Schema, model } = require("mongoose");
const validator = require("validator");
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    validate:[validator.isEmail,]
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    // required:true
  },
});

module.exports = model("User", userSchema);
