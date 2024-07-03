// const parent = document.getElementById("root");
// // const ul = document.createElement('ul');
// // ul.setAttribute=("style", "width: 400px;display: block; padding: 24px;background-color: yellow;margin: 48px auto;");

// // const li1 = document.createElement('li');
// // li1.setAttribute("style","margin: 12px; color: brown;");
// // li1.innerText="Item 1"
// // ul.appendChild(li1);

// // const li2 = document.createElement('li');
// // li2.setAttribute("style","margin: 12px; color: brown;");
// // li2.innerText="Item 2"
// // ul.appendChild(li2);

// // parent.appendChild(ul);

// //by react

// // const li1 = React.createElement("li", {}, "Item 1");
// // const li2 = React.createElement("li", {}, "Item 2");
// // const ul = React.createElement("ul", {}, [li1, li2]);

// // const root=ReactDOM.createRoot(parent);
// // root.render(ul);


// // const d1 = document.createElement("d1");
// // console.dir(d1);
// // const d2 = React.createElement("d2");
// // console.dir(d2);

// //--------------------------------------react----------------------------------------

// // const listItem1 = {
// //     $$typeof: Symbol.for("react.element"),
// //     type: "li",
// //     key: null,
// //     ref: null,
// //     props: {
// //         children: "Item 1",
// //     },
// //     _owner: null,
// //     _store: {},
// // };
// const listItem1 = React.createElement("li", {}, "Item 11");

// // const listItem2 = {
// //     $$typeof: Symbol.for("react.element"),
// //     type: "li",
// //     key: null,
// //     ref: null,
// //     props: {
// //         children: "Item 2",
// //     },
// //     _owner: null,
// //     _store: {},
// // };
// const listItem2 = React.createElement("li", {}, "Item 22");

// // const list = {
// //     $$typeof: Symbol.for("react.element"),
// //     type: "ul",
// //     key: null,
// //     ref: null,
// //     props: {
// //         children: [listItem1, listItem2],
// //         style: {
// //             backgroundColor: "yellow",
// //             padding: "24px",
// //         },
// //     },
// //     _owner: null,
// //     _store: {},
// // };
// const list = React.createElement("ul", {}, [listItem1, listItem2]);
// const root=ReactDOM.createRoot(parent);
// root.render(ul);


//-----------------------------second half---------------------------------

const parent = document.getElementById("div");
const root = ReactDom.createElement(parent);

const textHello = <h3>Hello</h3>;
const TextFrom  = () => {
        return <h3>From</h3>;
};
const TextReact = () => <h3>React</h3>;
const container = (
        <div>
                {textHello}
                <TextFrom/>
        </div>
)
