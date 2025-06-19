
const express = require("express");

const router=express.Router()
const { body: validateBody } = require("express-validator");
const productsController = require("../controllers/products.controllers");
router.get("/api/products", productsController.getAllCourses);
router.get("/api/products/:id", productsController.getCourse);

router.post(
  "/api/products",
  validateBody("title")
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ min: 3 }),
  productsController.addCourse
);
exports=router;