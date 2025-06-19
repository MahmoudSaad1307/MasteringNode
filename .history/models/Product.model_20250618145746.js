const { Schema, model } = require("mongoose");
const ProductSchema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, default: "no description" },
});
moduemodel("Product", ProductSchema);
