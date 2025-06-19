
const { body: validateBody } = require("express-validator");

const validator = () =>

   [validateBody("title")
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ min: 3 })
    .withMessage("Title must be at least 3 characters");]


module.exports = {validator};
