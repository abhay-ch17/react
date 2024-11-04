import { Link } from 'react-router-dom'
import { IoMdPerson } from "react-icons/io";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { FaBagShopping } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import {useSelector} from 'react-redux';
export const Header = ()=>{
    const bagItem = useSelector(store=>store.bag);
    const bagLength = bagItem.length;
    return <>
    <header>
        <div className="logo_container">
            <Link to="/"><img className="myntra_home" src="images/myntra_logo.webp" alt="Myntra Home"/></Link>
        </div>
        <nav className="nav_bar">
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Home & Living</a>
            <a href="#">Beauty</a>
            <a href="#">Studio <sup>New</sup></a>
        </nav>
        <div className="search_bar">
            <span className="search_icon"><FaMagnifyingGlass/></span>
            <input className="search_input" placeholder="Search for products, brands and more"/>
        </div>
        <div className="action_bar">
            <div className="action_container">
                <span className="action_icon"><IoMdPerson/></span>
                <span className="action_name">Profile</span>
            </div>

            <div className="action_container">
                <span className="action_icon"><BsFillEmojiSmileFill/></span>
                <span className="action_name">Wishlist</span>
            </div>

            <Link className="action_container text-dark" to="bag">
                <span className="action_icon"><FaBagShopping/></span>
                <span className="action_name">Bag</span>
                <span className="bag-item-count">{bagLength}</span>
            </Link>
        </div>
    </header>
    </>
}

export default Header