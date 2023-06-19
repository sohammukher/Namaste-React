import RestaurantCard from "./RestaurantCard";
import Footer from "./Footer";
import Shimmer from "./Shimmer"
// import restList from "../utils/mockdata";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
      const jsonResponse = await data.json();
      console.log("jsonResponse", jsonResponse);

      // Update List Of Restaurant with new data we fetched from API.
      setresList(jsonResponse?.data?.cards[2]?.data?.data?.cards)
      sefilteredResList(jsonResponse?.data?.cards[2]?.data?.data?.cards)

      // After That React will Re-render this component.
      console.log("Rerendered")
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  console.log("resList", resList.length)

  //When Nothing Is Rendered Print Loading to the Console................
  //resList is a state variable
  // State Varibales - Super Powerful Variable
  return resList.length === 0? <Shimmer/>: (
    <div className="body">

      <div className="filter">

        <input type="text" className="search-box"
        onChange={(e)=>{ // This a callback method

            console.log("Value User Changed in SearchBox is"+e.target.value);
            setsearchText(e.target.value)// Change the state varible
            // Now the TextBox Will be Updated!!!

        }}></input>
        <button className="search-button" 
        value = {searchText}
        onClick={()=>{
            console.log("Search Button Clicked")
            // Filter the restaurant cards and update the UI
            // We need the search text

            let filteredList = resList.filter((res)=>res.data.name.toLowerCase().includes(searchText.toLowerCase()))

            // Setting new value of the state variable
            sefilteredResList(filteredList)

            console.log("rerendered the filtered list")

        }}>Search</button>
    
    
        <button
          className="filter-btn"
          onClick={() => {
            // Filtering out restaurants with avgRating More than 4
            listOfRestaurant = restList.filter((res) => res.data.avgRating > 4);

            // Works like a setter function, setting the value of resList to the value of the array
            console.log("setting resList")
            setresList(listOfRestaurant);

            console.log(listOfRestaurant);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      {/* <div className="search">Search</div> */}
      <div className="restaurant-container">
        
        {filteredResList.map((currentItem) => (
         <Link to = {"/restaurants/"+currentItem.data.id}> 
         <RestaurantCard key={currentItem.data.id} resdata={currentItem} />
          </Link>
        ))}
       
      </div>
      <Footer />
    </div>
  );
};

export default Body;
