//Header : Contains the navbar
// Header:
    // -Logo
    // -Nav Items

// -------------------------
import { LOGO_URL } from "../utils/constant";

const Header = () =>{

    return (<div className="header">
        <div className="logo-container"><img className="logo" src ={LOGO_URL}/></div>
        <div className="navItems">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>)
}


export  default Header;
