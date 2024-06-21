// console.log("start");
// function abc(x){
//     console.log(x*2);
//     temp(x/2);
// }
// abc(8);
// console.log("mid");
// function temp(x){
//     console.log(x/2);
// }
// console.log("end");


// const button=document.getElementsByTagName('button')[0];
// button.addEventListener('click',cb);
// function cb(){
//     console.log('button clicked');
// }


// const input=document.getElementsByTagName('input')[0];
// input.addEventListener('keyup',cb);
// function cb(){
//     console.log('Input is',ev.target.value);


// console.log('start');
// const delay=1000;
// const cb = () =>{
//     console.log('CB called');
// }
// setTimeout(cb,delay);
// console.log('end');



// console.log('start');
// setIimeout(() =>{
//     console.log('CB called');
//     setIimeout(() =>{
//         console.log('Internal CB called');
//     },10000);
// },10000);
// console.log('end');



// console.log('start');
// function abc(){
//     console.log('B')
// }
// function efg(){
//     console.log('C')
// }
// setTimeout(abc,0);
// efg();
// console.log('start');


//promise 

// const pr=fetch('https://api.github.com/users/likbalpande');
// console.log(pr);
// const cb1=(e)=>{
//     console.log('Fetch +',e);
//     e.json();
// }
// const cb2=(e)=>{
//     console.log('Fetch -',e);
// }
// pr.then(cb1).catch(cb2);



// const pr=fetch('https://api.github.com/users/likbalpande');
// console.log(pr);
// pr.then((res)=>{
//     const pr2 = res.json();

// pr2.then((data)=>{
//     console.log(data);
// });
// }).catch((e) => {
//     console.log('Fetch',e);
// });



// const request=fetch('https://dummyjson.com/products');
// request.then((result)=>{
//     const convertData=result.json();

//     convertData.then(renderUI);

// }).catch((error)=>{
//     alert(error);

// });

// const renderUI =(data)=>{
//     const products=data.products;
//     for(let i=0;i<products.length; i++){
//         // root.append(`${products[i].title}\n`);
//         const card =document.createElement('div');
//         card.className='product-card';
//         card.innerHTML=`
//         <h3>${products[i].title}</h3>
//         <p>${products[i].price}</p>
//         `;
//         root.appendChild(card);
//     }
// }





const request = fetch('https://dummyjson.com/products');
request.then((result) => {
    return result.json();
}).then((data) => {
    renderUI(data.products);

    const searchBar = document.getElementById('searchBar');
    searchBar.addEventListener('input', (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const filteredProducts = data.products.filter(product => product.title.toLowerCase().includes(searchTerm));
        renderUI(filteredProducts);
    });

}).catch((error) => {
    alert(error);
});

const renderUI = (products) => {
    const root = document.getElementById('root');
    root.innerHTML = ''; // Clear previous content
    for (let i = 0; i < products.length; i++) {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <h3>${products[i].title}</h3>
            <p>${products[i].price}</p>
            <img src="${products[i].thumbnail}" alt="${products[i].title}" style="width: 100%; height: auto;">
        `;
        root.appendChild(card);
    }
};


