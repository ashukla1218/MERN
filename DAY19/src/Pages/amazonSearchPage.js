import { useEffect ,useState} from "react";
import CategoryBar from "../components/categoryBar";
import Navbar from "../components/navbar";

import Navbar from "../components/navbar";

const SearchPage = (props) => {
    const {categories, searchText, setSearchText} = props;

    const [products, setProducts] = useState([]);

    
    async function getData(){
        const res = await fetch(`https://dummyjson.com/products/search?q=${searchText}`);
        const data = await res.json();
        setProducts(data.products);
        console.log("api called");
    }

    useEffect(()=>{
        getData();
    }, [searchText]);

    return (
        <div>
            <Navbar setSearchText={setSearchText}/>
            <CategoryBar categories = {categories} />
        
        <div>
            {/* <div>
                <input type="text" onChange={getData} />
            </div>
                <h1>The search text is: {searchText}</h1>
                <hr />
            <button onClick={getData}>Get Data</button> */}
            {products.map((elem)=>{
                return <p key={elem.id}>{elem.title}</p>;
            })}
        </div>
        </div>
    );
};

export default SearchPage;