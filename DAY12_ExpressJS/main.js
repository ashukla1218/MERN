
// what is express
// Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile 
// applications.
const express = require('express');
const { type } = require('os');
const app = express();
const fsPromises = require('fs').promises;

app.use(express.json());

app.get('/', async (req, res) => {
    const text = await fsPromises.readFile('./data.json', {encoding: 'utf-8'});
    let products = [];
    try {
        products = JSON.parse(text); // Removed the const keyword
    } catch (err) {
        console.log(err);
    }
    res.status(201);
    res.json({
        status: "success",
        message: "server is running on port 3000",
        data: {
            products: products,
        },
    });
});

const getData= async ()=>{
    const text= await fsPromises.readFile('./data.json', {encoding: 'utf-8'});
    let products;
    try {
        products = JSON.parse(text);
    } catch (err) {
       
        products = [];
    }
    return products;

};

app.post("/products", async (req, res) => { // Make this function async
    //console.log(typeof req.body); // object
    //console.log(req.body); // { name: 'new product', price: 100 }
    // const body = req.body;
    // let products;
    // try {
    //     const text = await fsPromises.readFile('./data.json', {encoding: 'utf-8'});
    //     products = JSON.parse(text);
    // } catch (err) {
    //     products = [];
    //     console.error(err); // It's good practice to log the error
    // }
    const body = req.body;
    const products = await getData();

    // const prLen = products.length;
    // const lastIndex = prLen-1;
    // const lastItem = products[lastIndex];
    // const lastId = lastItem.id;
    //this could be also wrtten as
    let lastId = 1;
    if(products.length !=0){
        lastId = products[products.length-1].id;
    }
    body.id = lastId +1;

    products.push(body);
    console.log(products);

    await fsPromises.writeFile('./data.json', JSON.stringify(products, null, 2));
    
    res.json({
        status: "success",
        message: "Product added successfully",
    });
});

app.post("/products/:id",(req,res)=>{
    const params = req.params;
    console.log(params);

    res.send({
        status:"in progress",
    })
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});