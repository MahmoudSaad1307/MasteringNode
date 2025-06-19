const express = require("express");
const app = express();
const { body: validateBody, validationResult } = require("express-validator");
app.use(express.json());

app.get("/api/products", getCourses);
app.get("/api/products/:id", getCourse);

app.post(
  "/api/products",
  validateBody("title")
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ min: 3 }),
  addCourse
);


app.listen(1307, () => console.log("Working"));
