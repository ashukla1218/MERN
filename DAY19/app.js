import ReactDOM from "react-dom/client";
import "./style.css";
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);
const items=[
    "Fresh",
    "Amazon miniTv",
    "Sell",
    "Best Seller",
    "Mobiles",
    "Todays Deals",
    "Prime",
    "Fashion",
    "Electonics",   

]

const HomePage = ()=>{
    return (
        <div className="homepage-root-container">
            <nav className="homepage-nav">
                <h4>amazon</h4>
                <p><IoLocationOutline />Address:<br />LPU University</p>
                <div className="homepage-search-container">
                    <select />
                    <input />
                    <button> <IoSearch /></button>
                </div>
                <h5><CgProfile />Profile</h5>
                <h5><MdOutlineShoppingCart />Cart</h5>
            </nav>
            <div className="homepage-category-bar">
                <button><GiHamburgerMenu />ALL</button>
                <div className= "category-items">
                    {items.map((elem)=>{
                        return <p>{elem}</p>
                    })}
                </div>
            </div>
        </div>
    )
};

const App = () =>{
    return (
        <div>
            <HomePage />
        </div>
    );
};

root.render(App());