import RestaurantCard from "./RestaurantCard";
import Footer from "./Footer";
import Shimmer from "./Shimmer"
// import restList from "../utils/mockdata";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"
import {useDispatch, useSelector} from "react-redux"

import { Provider, useSelector } from "react-redux";
import appStore from "../utils/appStore";
import GPTSearchUI from './GPTSearchUI';


import UserContext from "../utils/UserContext.js";
// import { useContext } from "react";


import { Provider, useDispatch } from "react-redux";
import {appStore} from "../utils/appStore"

import { withPromotedLabel } from "./RestaurantCard";
import { toggleGptSearchView } from "../utils/gptSlice.js";
// Body:
// -Search
// -Restaurant Container
// 	->Restaurant Card(Multiple in Number) --> New Reusable component
let listOfRestaurant = [];

const Body = () => {

  //Gpt Component
  const dispatch = useDispatch();

// Handle GPT Search
const handleGPTSearchClick = () =>{

  console.log("Inside handleGPTSearchClick")
  // Toggle GPT Search View
  dispatch(toggleGptSearchView())
}


  const [resList, setresList] = useState([]); // This we will never Modify just for reading
  const [filteredResList, sefilteredResList] = useState(resList); // This we will modify this is for the actual display purpose

  // console.log("Initial Length of resList",resList.length)
  // console.log(resList)

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
    // const data = await fetch(
    //   "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6155712&lng=77.3848373&page_type=DESKTOP_WEB_LISTING"
    // );

    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2599333&lng=77.412615&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

   

    
    // fetch() will return a promise
    // to resolve a promise
    // 1) using . then and catch to handle errors
    // 2) newer approach using "async await"
    // -> make the function async
    // -> await the fetch call

    try {
    //   const data = await fetch(
    //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6155712&lng=77.3848373&page_type=DESKTOP_WEB_LISTING"
    //   );
    //   if (!data.ok) {
    //     throw new Error(`Request failed with status ${data.status}`);
    //   }
      const json = await data.json();
      
      console.log("jsonResponse", json);

      const data1 = json?.data?.cards?.filter(
        (rest) => (rest.card?.card?.id === "restaurant_grid_listing")
    );

    console.log("DATA1", data1);

   const data2 = data1[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

   console.log("DATA2", data2);





      // Update List Of Restaurant with new data we fetched from API.
      // setresList(jsonResponse?.data?.cards[2]?.data?.data?.cards)
      // sefilteredResList(jsonResponse?.data?.cards[2]?.data?.data?.cards)

        // console.log("API OUTPUT")
        console.log("API OUTPUT",json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

      // API Correction
      // setresList(
      //   json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      // );
      // sefilteredResList(
      //   json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      // );

      setresList(data2);
      sefilteredResList(data2);

      // After That React will Re-render this component.
      console.log("Rerendered")
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  // console.log("resList", resList.length)

  //Check Internet
  const internetStatus = useOnlineStatus()

  console.log("internetStatus "+internetStatus)
  if(internetStatus === false){

    return <h1>You are Offline!!!!</h1>
  }

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  //When Nothing Is Rendered Print Loading to the Console................
  //resList is a state variable
  // State Varibales - Super Powerful Variable
  if(showGptSearch){
    return <GPTSearchUI/>
  }
  return resList.length === 0? (<Shimmer/>): (
    
    <div className="body">

      <div className="filter flex dark:bg-black ">

        <input type="text" 
        data-testid = "searchInput"
        className="border border-solid border-black  rounded-md px-4 py-2 my-2 mx-4"
        onChange={(e)=>{ // This a callback method

            console.log("Value User Changed in SearchBox is"+e.target.value);
            setsearchText(e.target.value)// Change the state varible
            // Now the TextBox Will be Updated!!!

        }}></input>
        <button className="px-4 bg-yellow-500 m-4  rounded-md hover:border-orange-500 font-bold" 
        value = {searchText}
        data-testid = "searchButton"

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
          className="m-4 bg-orange-500 px-6 rounded-md hover:border-2 border-yellow-500 font-bold"
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

        {/* <label className="px-4  mx-4/12  font-bold py-4 dark:text-white">Temporary UserName: </label>
        <input className="border-2 border-black mx-30  rounded-md my-2" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}></input> */}

        <button className="px-4 bg-purple-700 m-4  py-2  text-white rounded-md hover:border-orange-500 font-semibold" onClick={handleGPTSearchClick}>Food Suggestions Assistant</button>

      </div>
      {/* <div className="search">Search</div> */}
      <div className="flex flex-wrap dark:bg-black ">
        
        {filteredResList.map((currentItem) => (
         <Link to = {"/restaurants/"+currentItem.info.id}> 
         
         {/* If the Restaurant Is Promoted Add a Key to it. */}
         {currentItem.info.promoted?(<RestaurantCardPromoted key={currentItem.info.id} resdata={currentItem.info} />):(<RestaurantCard key={currentItem.info.id} resdata={currentItem.info} />)}
         
          </Link>
        ))}
       
      </div>
      <Footer />
    </div>
    
  );
};

export default Body;
