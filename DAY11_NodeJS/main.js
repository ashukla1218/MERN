const http = require('http');
const fsPromise = require('fs/promises');
const fs = require("fs");
const url = require("url");

const dataText = fs.readFileSync("./data.json");
const data = JSON.parse(dataText);

const app = http.createServer(async (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    const {query,pathname} = url.parse(req.url, true);
    switch (pathname) {
        case '/':{
            const bf=await fsPromise.readFile('./pages/homepage.html');
            res.end(bf);
            break;
        }
        //     res.write('<h1>Home page</h1>');
        //     break;
         case '/product':{
            const bf=await fsPromise.readFile('./pages/product.html');
            let text = bf.toString();
            let ProductsText = "";
            for(let i=0;i< data.length; i++){
                ProductsText += `<div class="product-card">
                    <h3>${data[i].title}</h3>
                    <img src="${data[i].thumbnail}" alt='product-image' height='200'>
                    <p>${data[i].description}</p>
                    <button class="viewButton"><a href="/view?id=${data[i].id}" target="_blank" class="button">View products</a></button>
                </div>`;
            }
            text = text.replace("$TITLE$",ProductsText);
            res.end(text);
            break;
        }
        case "/view":{
            const product=data.find((elem)=>{
                if(elem.id==query.id) return true;
                else return false;
            });
            const bf=await fsPromise.readFile('./pages/view.html');
            let text = bf.toString();
            text = text.replace(
                "$VIEW$",
            `<div>

                <h2>${product.title}</h2>
                <img src="${product.thumbnail}" alt='product-image' height='300'>
                <h4>${product.price}</h4>
                <p>${product.description}</p>
                </div>`
            );
                res.end(text);
            break;
        }    
        default:
            res.write('<h1>Page not found</h1>');
    }
    res.end();
});

// Removed the duplicate app.listen to resolve the error
app.listen(3000, () => {
    console.log('----------Server Started----------');
});