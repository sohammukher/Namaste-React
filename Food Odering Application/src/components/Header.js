//Header : Contains the navbar
// Header:
// -Logo
// -Nav Items

// -------------------------
import { useState,useEffect } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus"


const Header = () => {
  let loginBtnTxt = "Login";

  const [loginBtn, setloginBtn] = useState(loginBtnTxt);


  useEffect(()=>{ 
    console.log("useEffect Called");
  },[]); // If we dont put the Dependency array
  // useEffect is called on every render.

  // Checking Internet Status :
  const internetStatus = useOnlineStatus()

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
          <li className="px-4">Cart</li>
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
