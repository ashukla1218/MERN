const productModel = require("../models/productModel.js");

const checkId = async(req,res,next)=>{
    try{
        const {id} = req.params;
    const product = await productModel.findById(id);
    if (!product){
        response.status(404);
        res.json({
            status: "fail",
            message: "product id not found",
            });
            return ;
    }
   next();
    } catch(err){
        if (err.name == "CastError"){
            res.status(400);
            res.json({
                status: "fail",
                message: "Invalid product Id",
            });
            return ;
        }
        res.status(500);
        res.json({
            status: "fail",
            err: "Internal server Error",
        });
    }
    
}

const getProducts = async(req,res) =>{
    const products = await productModel.find({}).limit(10);
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

const updateProduct = async(req,re)=>{
    try{
        const { id } = req.params;
        const body = req.body;

        const newProduct = await productModel.findOneAndUpdate({ _id: id},body,{
        new:true,
        });
        res.status(200);
        res.json({
            status: "status",
            data:{
                product: newProduct,
            },
        });
    } catch(err){
        res.status(500);
        res.json({
            status: "fail",
            message: "Internal sever error",
            info: err,
        });
    }
    
};

const deleteProduct = async (req,res)=>{
    try{
        const { id } = req.params;
        await productModel.findOneAndDelete(id);
        res.status(204);
        res.json({
            status: "success",
            data:{
                product: null,
            },
        });
    } catch(err){
        res.status(500);
        res.send({
            status: "failed",
            message: "Internal server error",
        });
    };
};

const listProduct = async (req,res)=>{
    const {limit=10, ...filters} = req.query;
    
    const pizzasQuery = productModel.find(filters);
    const limitedPizzas = await pizzasQuery.limit(limit);

    res.json({
        status: "success",
        data: {
            pizzas: limitedPizzas,
        },
    });
};

module.exports = {
    getProducts,createProduct,replaceProduct,checkId,updateProduct,deleteProduct,listProduct,
};