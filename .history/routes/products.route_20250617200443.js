
const express = require("express");

const router=express.Router()
const {validator} = require("../middleware/validation");
const productsController = require("../controllers/products.controllers");

router.route("/").post(
  
[  validator],
  
  productsController.addCourse).get(productsController.getAllCourses);
router.get("/:id", productsController.getCourse);

module.exports=router;