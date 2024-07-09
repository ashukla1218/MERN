import { useContext } from "react";
import CategoryBar from "../components/categoryBar";
import Navbar from "../components/navbar";
import useGetProducts from "../hooks/useGetProducts";
import AppContext from "../context/appContext";

const SearchPage = (props) => {
    const { categories } = props;
    const products = useGetProducts();
    const { addToCart } = useContext(AppContext);
    return (
        <div>
            <Navbar />
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
                        <p className="product-tags">{elem.tags.join(': ')}</p>
                        <p className="product-price">Price: ${elem.price}</p>
                        <div className="product-rating">⭐⭐⭐⭐⭐ ({elem.rating})</div>
                        <button className="view-product-btn">View product</button>
                        <button className="add-to-cart-btn" onClick={()=>{
                            addToCart(elem);
                            }}>
                                Add to cart
                                </button>
                    </div>
                );
            })}
        </div>
        </div>
    );
};

export default SearchPage;