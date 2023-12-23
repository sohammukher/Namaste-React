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
import { changeLanguage } from "../utils/configSlice";

import {useDispatch, useSelector} from "react-redux"

import { Provider, useSelector } from "react-redux";
import appStore from "../utils/appStore";
import GPTSearchUI from './GPTSearchUI';
// import gptSlice from "../utils/gptSlice";


const Header = () => {
  let loginBtnTxt = "Login";
  // let loginBtnTxt = "Logout";


  // let modeText = "Dark";

 let [modeText, setModeText] = useState("Dark");

  const [loginBtn, setloginBtn] = useState(loginBtnTxt);


  const [welcomeText,setWelcomeText] = useState("Welcome Visitor");


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

  const dispatch = useDispatch();


  // Language Change
  const handleLanguageChange = (e) =>{
    
    console.log("Inside LanguageChange",e.target.value);

    dispatch(changeLanguage(e.target.value));
  }

  // Search and Hide the Language Selector
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch);

// Handle GPT Search
const handleGPTSearchClick = () =>{

    console.log("Inside handleGPTSearchClick")
    // Toggle GPT Search View
    dispatch(toggleGptSearchView())
  }

  return (

    <div className=" bg-amber-400 flex justify-between ">
      <div className="logo-container  "  >
          <Link to="/">
        <img className="w-[100px]  border-2 border-amber-600 rounded-full px-3 py-4 " src={LOGO_URL} />
          </Link>
      </div>
      <div className="navItems items-center px-15 font-semibold ">
          <ul className="flex p-4 m-4">
              <li className="px-4 font-bold text-xl">Online Status: {useOnlineStatus() ? "🟢" : "🔴"}</li>

              <li className="px-4 font-bold text-xl"><Link to="/" onClick={handleGPTSearchClick}>Home 🏠</Link></li>

              <li className="px-4 font-bold text-xl"><Link to="/about">About Us ℹ️</Link></li>

              <li className="px-4 font-bold text-xl"><Link to="/contact">Contact Us 📞</Link></li>

              {/* <li className="px-4 font-bold text-xl"><Link to="/grocery">Grocery 🛍️</Link></li> */}

              <li className="px-4 font-bold text-xl">
                  <Link to="/cart">
                      Cart 🛒- {cartItems.length} Items
                  </Link>
              </li>

              {showGptSearch? <li className="">
                <select onChange={handleLanguageChange} className="p-2 font-bold text-xl mx-4 bg-slate-600 opacity-80 rounded-lg text-white">
                    <option value="en">English</option>
                    <option value="fr">French</option>
                </select>
              </li>:<></>}

             

              <button
                  className="bg-blue-600 rounded-lg px-5 hover:bg-slate-500 border-black"
                  onClick={() => {
                      console.log("Changing the Button Text to Logout ");

                      // If Login Set to Logout and if Logout Set to Login
                      loginBtnTxt == "Login"
                          ? (loginBtnTxt = "Logout")
                          : (loginBtnTxt = "Login");

                      // Setting the State of the Login Button
                      setloginBtn(loginBtnTxt);

                      loginBtnTxt == "Login"
                      ? (setWelcomeText("Welcome Visitor"))
                      :(setWelcomeText("Hello Soham"))


                  }}
              >
                  {loginBtn}
              </button>

              {/* <li className=" font-bold px-2 mx-2 py-2 bg-orange-600  rounded-lg">{contextData.loggedInUser.length === 0 ? "Welcome Visitor" : "Hi " + contextData.loggedInUser}</li> */}
              <li className=" font-bold px-2 mx-2 py-2 bg-orange-600  rounded-lg">{welcomeText}</li>

              <li onClick={toggleTheme} className=" font-bold px-2 mx-2 py-2 bg-black text-white rounded-lg hover:bg-blue-400 dark:hover:bg-blue-400 dark:bg-blue-50 dark:text-black">{modeText} Mode</li>

          </ul>
      </div>
    </div>
  );

  function toggleTheme(){
      // document.documentElement.classList.add('dark');
      document.documentElement.classList.contains('dark')?document.documentElement.classList.remove('dark'):document.documentElement.classList.add('dark');
      modeText === "Dark"? setModeText("Light"):setModeText("Dark");

  }

  function isDarkModeActive(){
      return document.documentElement.classList.contains('dark');
  }
};

export default Header;
