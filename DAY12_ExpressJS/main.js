
// what is express
// Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile 
// applications.
const express = require("express");

const productRouter = require("./routes/productRoutes.js");

const app = express();
app.use(express.json());

app.use((req,res)=>{
    console.log("",req.url, req.method);
});

app.use("/products", productRouter);

app.listen(1400);