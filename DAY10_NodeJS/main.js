// const fs = require("fs");

// const data1 = fs.readFileSync('./text.txt');
// const text1 = data1.toString();
// console.log(text1);

// const data2 = fs.readFileSync('./text.txt',{encodig:"utf8"});
// console.log(data2);



// const fs = require("fs");
// fs.readFileSync('./text.txt',{encodig:"utf8"},(err,data)=>{
//     if(err)console.log("error occured",err);
//     else console.log(data);
// });


// const fs = require("fs");
// const res = fs.writeFileSync('./text.txt'," custom text from nodejs");
// console.log(res);


// const fs = require("fs");
// fs.writeFile('./text.txt'," custom text from nodejs", (err,data)=>{
//     console.log(err,data);
// });



// const fsPromises = require("fs/promises");
// fsPromises.readFile('./text.txt', {encoding: "utf8"})
// .then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log("Error",err)
// })



// const fsPromises = require("fs/promises");
// fsPromises.writeFile('./text.txt', "Dummy text")
// .then((data)=>{
//     console.log("write done")
// }).catch((err)=>{
//     console.log("Error",err)
// })



//ques
// const fsPromises = require("fs/promises");
// const pr = fsPromises.readFile('./data.json')

// pr.then((bf)=>{
//     const text = bf.toString();
//     const arr = JSON.parse(text);
//     let mt=0,st=0;
//     for(let i=0; i<arr.length; i++){
//         mt+=arr[i].MathScore;
//         st+=arr[i].ScienceScore;
//     }
//     console.log("math score is",mt);
//     console.log("science score is",st);
// })
// .catch(console.log);


//find id No. 3
const fsPromises = require("fs/promises");
const pr = fsPromises.readFile('./data.json')

// const getObjectById = (id,arr)=>{
//     for(let i=0; i<arr.length; i++){
//         if(arr[i].id ===id){
//             return arr[i];
//         }
//     }
// }

//using find
const res = arr.find((elem)=>{
    if(elem.id ===id) return true;
    else return false;
});
return res;

pr.then((bf)=>{
    const text = bf.toString();
    const arr = JSON.parse(text);
   
    const obj = getObjectById(3,arr);
    console.log(obj);
})
.catch(console.log);

