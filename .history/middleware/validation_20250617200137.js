const { body: validateBody } = require("express-validator");

const validator = () =>
{
  return [
    validateBody("title").notEmpty().withMessage("Title is required"),
    validateBody("price").notEmpty().withMessage("Price is required"),
  ];
}

module.exports = validator;
