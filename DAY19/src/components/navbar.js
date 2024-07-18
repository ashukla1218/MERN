import { useContext } from "react";
import { IoSearchSharp } from "react-icons/io5";
import AppContext from "../context/appContext";
import { BsAmazon } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = ({ openSearchPage }) => {
    const { setSearchText ,cart} = useContext(AppContext);
    const handleSearch = (e) => {
        setSearchText(e.target.value);
    };

    return (
        <nav className="homepage-nav">
            <h4><BsAmazon />amazon.in</h4>
            <p><IoLocationOutline />
                Address:
                <br />
                LPU University
            </p>
            <div className="homepage-search-container">
                <select>
                <option>ALL</option>
                </select>
                <input type="text" onChange={handleSearch} />
                <button onClick={openSearchPage}>
                    <IoSearchSharp />
                </button>
            </div>
            <h5><CgProfile />Profile</h5>
            <h5 title={JSON.stringify(cart)}><MdOutlineShoppingCart />Cart</h5>
        </nav>
    );
};

export default Navbar;