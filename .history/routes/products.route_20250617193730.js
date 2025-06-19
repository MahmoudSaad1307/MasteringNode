
const router=express.Router()
const productsController = require("..controllers/products.controllers");
const { body: validateBody } = require("express-validator");
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