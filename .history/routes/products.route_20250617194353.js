
const express = require("express");

const router=express.Router()
const { body: validateBody } = require("express-validator");
const productsController = require("../controllers/products.controllers");
router.get("/", productsController.getAllCourses);
router.get("/products/:id", productsController.getCourse);

router.post(
  "/products",
  validateBody("title")
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ min: 3 }),
  productsController.addCourse
);
module.exports=router;