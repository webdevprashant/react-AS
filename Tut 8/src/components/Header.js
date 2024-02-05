import { useEffect, useState } from "react";
import { CDN_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();

     return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={CDN_LOGO} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status : {onlineStatus ? "✅" : "🔴"}</li>
                    <li><Link to="/">Home</Link> </li>
                    <li><Link to="/about">About Us</Link> </li>
                    <li><Link to="/contact">Contact Us</Link> </li>
                    <li><Link to="/grocary">Grocary</Link> </li>
                    <li>Cart</li>
                <button className="login" onClick={() => btnNameReact == "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login") }>{btnNameReact}</button> 
                </ul>
            </div>
        </div>
    );
};
export default Header;