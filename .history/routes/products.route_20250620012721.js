const express = require("express");

const router = express.Router();
const { validator } = require("../middleware/validation");
const productsController = require("../controllers/products.controllers");
const verifyToken = require("../middleware/verifyToken");
const whoHasAccess = require("../middleware/whoHasAccess");

router
  .route("/")
  .post(
    validator(),
    verifyToken,

    productsController.addProduct
  )
  .get(productsController.getAllProducts);
router
  .route("/:id")
  .get(productsController.getProduct)
  .patch(productsController.updateProduct)
  .delete(verifyToken,whoHasAccess(A),productsController.deleteProduct);

module.exports = router;
