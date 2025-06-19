const express = require("express");

const router = express.Router();
const { validator } = require("../middleware/validation");
const productsController = require("../controllers/products.controllers");

router
  .route("/")
  .post(
    validator(),ver

    productsController.addProduct
  )
  .get(productsController.getAllProducts);
router
  .route("/:id")
  .get(productsController.getProduct)
  .patch(productsController.updateProduct)
  .delete(productsController.deleteProduct);

module.exports = router;
