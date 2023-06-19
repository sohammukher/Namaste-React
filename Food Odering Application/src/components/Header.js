//Header : Contains the navbar
// Header:
// -Logo
// -Nav Items

// -------------------------
import { useState,useEffect } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";


const Header = () => {
  let loginBtnTxt = "Login";

  const [loginBtn, setloginBtn] = useState(loginBtnTxt);


  useEffect(()=>{ 
    console.log("useEffect Called");
  },[]); // If we dont put the Dependency array
  // useEffect is called on every render.



  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="navItems">
        <ul>
          <li><Link to ="/">Home</Link></li>
          <li><Link to ="/about">About Us</Link></li>
          <li><Link to ="/contact">Contact Us</Link></li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              console.log("Changing the Button Text to Logout ");

              // If Login Set to Logout and if Logout Set to Login
              loginBtnTxt == "Login"
                ? (loginBtnTxt = "Logout")
                : (loginBtnTxt = "Login");

              // Setting the State of the Login Button
              setloginBtn(loginBtnTxt);
            }}
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
