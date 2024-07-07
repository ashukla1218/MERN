import { useEffect ,useState} from "react";
import CategoryBar from "../components/categoryBar";
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
        
        <div className="product-card-holder">
            {/* <div>
                <input type="text" onChange={getData} />
            </div>
                <h1>The search text is: {searchText}</h1>
                <hr />
            <button onClick={getData}>Get Data</button> */}
            {products.map((elem)=>{
                return (
                    <div key={elem.id} className="product-card">
                        <img className ="product-image" src={elem.thumbnail} alt={elem.title} />
                        <h2 className="product-title">{elem.title}</h2>
                        <p className="product-description">{elem.description}</p>
                        <p className="product-price">Price: ${elem.price}</p>
                        <div className="product-rating">⭐⭐⭐⭐⭐ ({elem.rating})</div>
                        <button className="view-product-btn">View product</button>
                        <button className="add-to-cart-btn">Add to cart</button>
                    </div>
                );
            })}
        </div>
        </div>
    );
};

export default SearchPage;