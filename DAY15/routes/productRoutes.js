const express = require ("express");
const { getProducts, createProduct, replaceProduct, checkId, updateProduct,deleteProduct,listProducts } = require("../controllers/productControllers");

const productRouter = express.Router();

productRouter.route("/").get(getProducts).post(createProduct);

productRouter.route("/list").get(listProducts);

productRouter.route("/:id").put(checkId,replaceProduct).patch(checkId,updateProduct).delete(deleteProduct);

module.exports = productRouter;