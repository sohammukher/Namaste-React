///Header : Contains the navbar
// Header:
// -Logo
// -Nav Items

// -------------------------
import { useState,useEffect } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus"

// For Using the React Context

// Import the Context File
import UserContext from "../utils/UserContext";

// Import useContext from "react"
import { useContext } from "react";

import { useSelector } from "react-redux";

import { Provider } from "react-redux";
import {appStore} from "../utils/appStore"


const Header = () => {
  let loginBtnTxt = "Login";

  const [loginBtn, setloginBtn] = useState(loginBtnTxt);


  // Selector Hook Inside React

  // Subscribing to the store using selector
  // Note cart is the name of the slice which we have defined
 const cartItems = useSelector((store)=> store.cart.items);


  useEffect(()=>{ 
    console.log("useEffect Called");
  },[]); // If we dont put the Dependency array
  // useEffect is called on every render.

  // Checking Internet Status :
  const internetStatus = useOnlineStatus()


  // Accessing Data From Context:
  // inside useContext() --> pass the name of the context file
  // as there may be more thatn one context file in the Application
  const contextData = useContext(UserContext);

  // To Access do variable.name_of_the_attribute
  console.log("Context Data")
  console.log(contextData.loggedInUser)

  return (

    <div className=" bg-amber-400 flex justify-between ">
      <div className="logo-container ">
        <img className="w-[100px]  border-2 border-amber-600 rounded-full px-3 py-4 " src={LOGO_URL} />
      </div>
      <div className="navItems items-center px-15 font-semibold ">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {useOnlineStatus()?"🟢":"🔴"}</li>

          <li className="px-4"><Link to ="/">Home</Link></li>

          <li className="px-4"><Link to ="/about">About Us</Link></li>

          <li className="px-4"><Link to ="/contact">Contact Us</Link></li>

          <li className="px-4"><Link to ="/grocery">Grocery</Link></li>

          <li className="px-4 font-bold text-xl" >
          <Link to="/cart">
          Cart - {cartItems.length} Items
          </Link>
          </li>

          <button
            className="bg-blue-400 rounded-lg px-5 hover:bg-slate-500 border-black"
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

        <li className=" font-bold px-2 mx-2 py-2 bg-orange-600  rounded-lg">{contextData.loggedInUser.length===0?"Welcome Visitor":"Hi "+contextData.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
