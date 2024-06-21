const http = require('http');
const fsPromises = require("fs/promises");

const app = http.createServer(async (req,res)=>{
    console.log(req.url);
    res.writeHead(200, {
        'Content-Type':'text/html'
    });
    const route = req.url;
        switch(route){
            case "/":{
                const stream = await fsPromises.readFile('./homepage.html');
                res.end(stream);
                break;
            };
            case "products":{
                res.end("This is a product page");
                break;
            };
            default:{
                res.end("Oops! Page not found...")
            }
        }
    
});
app.listen(3000);
console.log("app is running");
// res.write('Welcome');
// res.setHeader('Content-Type','text/plain');