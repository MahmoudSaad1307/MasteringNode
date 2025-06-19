
const router=express.Router()

router.get("/api/products", productsController.getAllCourses);
app.get("/api/products/:id", productsController.getCourse);

app.post(
  "/api/products",
  validateBody("title")
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ min: 3 }),
  productsController.addCourse
);