
const express = require("express");

const router=express.Router()
const { body: validateBody } = require("express-validator");
const productsController = require("../controllers/products.controllers");
router.post(
  "/",
  [
    validateBody("title")
      .notEmpty()
      .withMessage("Title is required")
      .isLength({ min: 3 })
      .withMessage("Title must be at least 3 characters"),
  ],
  productsController.addCourse
);
router.route("/").post(productsController.addCourse).get(productsController.getAllCourses);
router.get("/", productsController.getAllCourses);
router.get("/:id", productsController.getCourse);

module.exports=router;