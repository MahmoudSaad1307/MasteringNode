const products = require("./data/course");

const getAllCourses = (req, res) => {
  res.json(products);
};
c
const addCourse = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors.array());
  }
  console.log(req.body);
  try {
    const product = req.body;
    product.id = products.length + 1;

    products.push(product);
    res.json(products);
  } catch (error) {
    res.json(error.message);
  }
};
exports.getCourses = getCourses;
