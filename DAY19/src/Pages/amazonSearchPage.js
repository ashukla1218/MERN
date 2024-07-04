import CategoryBar from "../components/categoryBar";
import Navbar from "../components/navbar";
import { useState } from "react";

const SearchPage = (props) => {
    const { categories } = props;

    const customStyles = {
        padding: "48px",
        textAlign: "center",
        backgroundColor: "Yellow",
    };

    // let searchText = "";
    const [searchText, setSearchText] = useState();
    console.log("initially: ", searchText);

    const handleSearch = (e) => {
        const val = e.target.value;
        // searchText = val;
        setSearchText(val);
    };

    const [products, setProducts] = useState([]);
    async function getData(){
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setProducts(data.products);
    }

    return (
        <div>
            <Navbar />
            <CategoryBar categories={categories} />
            <div style={customStyles}>
                <input type="text" onChange={handleSearch} />
            </div>
            <div style={customStyles}>
                <h1>The search text is: {searchText}</h1>
            </div>
            <button onClick={getData}>Get Data</button>
            {products.map((elem)=>{
                return <p>{elem.title}</p>;
            })}
        </div>
    );
};

export default SearchPage;