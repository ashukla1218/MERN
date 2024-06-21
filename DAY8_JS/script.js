const pr = new Promise((resolve, reject) => {
    let flag=true;

    if(flag===true){
        setTimeout(()=>{
            resolve(["apple","mango"]);
        },4000)
    }
    else{
        reject("Not done");
    }
});
pr.then((val,e)=>{
        console.log(val);
    }).catch(()=>{
        console.log(err);
    })