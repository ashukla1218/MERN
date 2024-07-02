const parent = document.getElementById("root");
// const ul = document.createElement('ul');
// ul.setAttribute=("style", "width: 400px;display: block; padding: 24px;background-color: yellow;margin: 48px auto;");

// const li1 = document.createElement('li');
// li1.setAttribute("style","margin: 12px; color: brown;");
// li1.innerText="Item 1"
// ul.appendChild(li1);

// const li2 = document.createElement('li');
// li2.setAttribute("style","margin: 12px; color: brown;");
// li2.innerText="Item 2"
// ul.appendChild(li2);

// parent.appendChild(ul);

//by react

const li1 = React.createElement("li", {}, "Item 1");
const li2 = React.createElement("li", {}, "Item 2");
const ul = React.createElement("ul", {}, [li1, li2]);

ReactDOM.createRoot(parent);
