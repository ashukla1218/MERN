const { productsCollection } = require("../config/db");

const getProducts = (req,res) =>{
    const products = productsCollection.find().toArray();
    res.send({
        status: "success",
        products: products
    });
};

const createProduct = async (req,res) =>{
    const body = req.body;
    //validation
    const newProduct = await productsCollection.insertOne(body);
    res.json({
        status: "success",
        data: {
            products: newProduct,
        }
    });
};

module.exports = {
    getProducts,createProduct
};