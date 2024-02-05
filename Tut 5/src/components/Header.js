import { useState } from "react";
import { CDN_LOGO } from "../utils/constants";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    console.log("Header Rendered...");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={CDN_LOGO} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                <button className="login" onClick={() => btnNameReact == "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login") }>{btnNameReact}</button> 
                </ul>
            </div>
        </div>
    );
};
export default Header;