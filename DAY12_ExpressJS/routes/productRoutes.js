const express = require("express");
const {
    getProducts,
    createProduct,
    replaceProduct,
    deleteProduct,
    updateProduct,
    validateForTitleAndPrice,
    getDataMiddleware,
} = require("../controllers/productControllers.js");

const productRouter = express.Router();

productRouter.use(getDataMiddleware);

productRouter.route("/").get(getProducts).post(validateForTitleAndPrice, createProduct);

productRouter.route("/:id").put(validateForTitleAndPrice, replaceProduct).patch(updateProduct).delete(deleteProduct);

module.exports = productRouter;