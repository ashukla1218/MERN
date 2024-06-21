// const arr = require('./myMath.js');

// const res = arr[0](9,10);
// console.log(res);

// const res2 = arr[1](9,10);
// console.log(res2);

//by array
// const [sum,mul] = require('./myMath.js');

// const res = sum(9,10);
// console.log(res);

// const res2 = mul(9,10);
// console.log(res2);

//by object
// const {sum,mul} = require('./myMath.js');

// const res = sum(9,10);
// console.log(res);

// const res2 = mul(9,10);
// console.log(res2);


const figlet = require("figlet");

figlet("Aashutosh",(err,data)=>{
    if(err)console.log(err);
    else console.log(data);
});