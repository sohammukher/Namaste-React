import RestaurantCard from "./RestaurantCard";
import Footer from "./Footer";
import Shimmer from "./Shimmer"
// import restList from "../utils/mockdata";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"

import UserContext from "../utils/UserContext.js";
import { useContext } from "react";


import { Provider } from "react-redux";
import {appStore} from "../utils/appStore"

import { withPromotedLabel } from "./RestaurantCard";
// Body:
// -Search
// -Restaurant Container
// 	->Restaurant Card(Multiple in Number) --> New Reusable component
let listOfRestaurant = [];

const Body = () => {
  const [resList, setresList] = useState([]); // This we will never Modify just for reading
  const [filteredResList, sefilteredResList] = useState(resList); // This we will modify this is for the actual display purpose

  console.log("Initial Length of resList",resList.length)
  console.log(resList)

  // Search Box Text
  const[searchText,setsearchText] = useState('')


  // Context to set the UserName:
  const {setUserName,loggedInUser} = useContext(UserContext);

  console.log("useContext(UserContext)")
  console.log(useContext(UserContext))




  // Higher Order Function Call
  // To Enhance Component Restaurant Card
  // Adding Promoted Label to the Card.
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // fetch is a function that JS engine has
    // This is Pure JS
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6155712&lng=77.3848373&page_type=DESKTOP_WEB_LISTING"
    );

    // fetch() will return a promise
    // to resolve a promise
    // 1) using . then and catch to handle errors
    // 2) newer approach using "async await"
    // -> make the function async
    // -> await the fetch call

    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6155712&lng=77.3848373&page_type=DESKTOP_WEB_LISTING"
      );
      if (!data.ok) {
        throw new Error(`Request failed with status ${data.status}`);
      }
      const json = await data.json();
      
      console.log("jsonResponse", json);

      // Update List Of Restaurant with new data we fetched from API.
      // setresList(jsonResponse?.data?.cards[2]?.data?.data?.cards)
      // sefilteredResList(jsonResponse?.data?.cards[2]?.data?.data?.cards)

      // API Correction
      setresList(
        json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      sefilteredResList(
        json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );

      // After That React will Re-render this component.
      console.log("Rerendered")
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  console.log("resList", resList.length)

  //Check Internet
  const internetStatus = useOnlineStatus()

  console.log("internetStatus "+internetStatus)
  if(internetStatus === false){

    return <h1>You are Offline!!!!</h1>
  }

  //When Nothing Is Rendered Print Loading to the Console................
  //resList is a state variable
  // State Varibales - Super Powerful Variable
  return resList.length === 0? <Shimmer/>: (
    <Provider props={appStore}>
    <div className="body">

      <div className="filter">

        <input type="text" className="border border-solid border-black  rounded-md"
        onChange={(e)=>{ // This a callback method

            console.log("Value User Changed in SearchBox is"+e.target.value);
            setsearchText(e.target.value)// Change the state varible
            // Now the TextBox Will be Updated!!!

        }}></input>
        <button className="px-4 bg-yellow-500 m-4  rounded-md hover:border-orange-500" 
        value = {searchText}
        onClick={()=>{
            console.log("Search Button Clicked")
            // Filter the restaurant cards and update the UI
            // We need the search text

            let filteredList = resList.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))

            // Setting new value of the state variable
            sefilteredResList(filteredList)

            console.log("rerendered the filtered list")

        }}>Search</button>
    
    
        <button
          className="bg bg-orange-500 px-5 rounded-md hover:border-2 border-yellow-500"
          onClick={() => {
            // Filtering out restaurants with avgRating More than 4
            listOfRestaurant = resList.filter((res) => res.info.avgRating > 4);

            // Works like a setter function, setting the value of resList to the value of the array
            console.log("setting resList")
            setresList(listOfRestaurant);
            sefilteredResList(listOfRestaurant)

            console.log(listOfRestaurant);
          }}
        >
          Top Rated Restaurants
        </button>

        <label className="px-4">UserName: </label>
        <input className="border-2 border-black" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}></input>
      </div>
      {/* <div className="search">Search</div> */}
      <div className="flex flex-wrap">
        
        {filteredResList.map((currentItem) => (
         <Link to = {"/restaurants/"+currentItem.info.id}> 
         
         {/* If the Restaurant Is Promoted Add a Key to it. */}
         {currentItem.info.promoted?(<RestaurantCardPromoted key={currentItem.info.id} resdata={currentItem.info} />):(<RestaurantCard key={currentItem.info.id} resdata={currentItem.info} />)}
         
          </Link>
        ))}
       
      </div>
      <Footer />
    </div>
    </Provider>
  );
};

export default Body;
