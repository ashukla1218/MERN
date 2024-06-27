const productModel = require("../models/productModel.js");

const getProducts = async(req,res) =>{
    const products = await productModel.find();
    res.send({
        status: "success",
        data: {
            products: products
        },
    });
};

const createProduct = async (req,res) =>{
    try{
       const body = req.body;
    //validation
        const newProduct = await productModel.create(body);
        res.json({
        status: "success",
        data: {
            products: newProduct,
            },
        }); 
    }catch(err){
        console.log(err);

        res.status(500);
        res.json({
            status: "fail",
            message: "Internal server error",
            info: err,
        });
    }
    
};

const replaceProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;

        const newProduct = await productModel.findOneAndReplace({ _id: id }, body, { new: true });
        res.json({
            status: "success",
            data: {
                product: newProduct,
            },
        });
    } catch (err) {
        console.log(err);
        res.status(500);
        res.json({
            status: "fail",
            message: "Internal Server Error",
            info: err,
        });
    }
};

module.exports = {
    getProducts,createProduct,replaceProduct,
};