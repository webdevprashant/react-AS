import { useEffect, useState } from "react";
import { CDN_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    // useEffect(() => {  console.log("Use Effect...")  } , []);               // Case 1 Dependency Array (Use effect calls when Header rendered ) on 1st time only.
    // useEffect(() => {  console.log("Use Effect...")  });                    // Case 2 No Dependency Array (Use effect calls when Header rendered ) on every render. 
    // useEffect(() => {  console.log("Use Effect...")  } , [btnNameReact]);   // Case 3 Dependency array contains specific state/normal Var) (Use effect calls when Header rendered) on when btnNameReact gets updated.
    console.log("Header Rendered...");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={CDN_LOGO} />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link> </li>
                    <li><Link to="/about">About Us</Link> </li>
                    <li><Link to="/contact">Contact Us</Link> </li>
                    <li>Cart</li>
                <button className="login" onClick={() => btnNameReact == "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login") }>{btnNameReact}</button> 
                </ul>
            </div>
        </div>
    );
};
export default Header;