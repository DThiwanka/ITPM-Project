const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProductById,
} = require("../controller/productControllers");

//@desc Get All Products From DB,
//@route Get /api/products,
//@access Public
router.get("/", getAllProducts);

//@desc Get Per Product By Id From DB,
//@route Get /api/products/:id,
//@access Public
router.get("/:id", getProductById);

module.exports = router;
