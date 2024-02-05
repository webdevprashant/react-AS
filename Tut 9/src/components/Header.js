import { useEffect, useState } from "react";
import { CDN_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();

     return (
        <div className="flex justify-between bg-slate-200 shadow-lg sm: bg-slate-200 lg: bg-green-200">
            <div className="logo-container">
                <img className="logo w-[130]" src={CDN_LOGO} />
            </div>
            <div className="nav-items">
                <ul className="flex m-6 p-4">
                    <li className="px-5">Online Status : {onlineStatus ? "✅" : "🔴"}</li>
                    <li className="px-5"><Link to="/">Home</Link> </li>
                    <li className="px-5"><Link to="/about">About Us</Link> </li>
                    <li className="px-5"><Link to="/contact">Contact Us</Link> </li>
                    <li className="px-5"><Link to="/grocary">Grocary</Link> </li>
                    <li className="px-5">Cart</li>
                <button className="login" onClick={() => btnNameReact == "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login") }>{btnNameReact}</button> 
                </ul>
            </div>
        </div>
    );
};
export default Header;