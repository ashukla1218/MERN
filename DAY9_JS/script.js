// const student={
//     userName:'Aashu',
//     rollNo:'24001',
//     city:'phagwara',
//     hobbies:['painting','styling','drawing'],
// }
// // console.log(student.name);
// //destructuring the object
// const {userName,city}=student;
// console.log(userName,city);


// const{hobbies}= student;

// student.hobbies[0]='studying';
// console.log(hobbies);
// console.log(student);



//rest-->to pack the values
//spread-->to the unpack the values

// const s1={
//     userName:'Aashu',
//     rollNo:'24001',
//     city:'phagwara',
//     hobbies:['painting','styling','drawing'],
// }
// const s2={...s1};
// s2.userName='Ajay';

// console.log(s1);
// console.log(s2);


//code
// function sum(...arr){
    // let sum=0;
    // for(let i=0;i<arr.length;i++){
    //     sum=arr[i];
    // }
    // return sum;

    // arr.reduce((acc,a,b,c)=>{
    //     console.log(a,b,c);
    // })

    // console.log(arr);
//     const res=arr.reduce((acc,elem,idx)=>{
//         console.log(acc,elem,idx);
//         return acc+elem;
//     }, -1);
//     console.log('-->',res);
// }


// sum()  //-->0
// sum(10)  //-->10
// sum(10,20)  //-->30
// sum(10,20,11)  //-->41
// sum(1,2,10,4)  //-->17




//promise using async , await
// function getData(){
//    const pr=fetch('https://dummyjson.com/products');
//    pr.then((res)=>{
//     const pr2=res.json();
//     pr2.then((data)=>{
//         console.log(data);
//     });
//    }); 
// }
// getData();


async function getData(){
    const res=await fetch('https://dummyjson.com/products');
    const data= await res.json();
    console.log(data);
     
 }
 getData();
