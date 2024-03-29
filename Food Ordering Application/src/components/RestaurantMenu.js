import { useEffect, useState } from "react" // Named Import
import Shimmer from "./Shimmer";
import {MENUAPI_URL} from "../utils/constant"
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory"

import useRestaurantMenu from "../utils/useRestaurantMenu"

const RestDetails =(props) =>{

    console.log("Inside RestDetails")

    // console.log(props.details)

    return (<div className="menuItem">
        <li>{props.details.name} <br></br> {props.details.price/100} Rupees</li>
        </div>
    )
}
const RestaurantMenu =() =>{

    const VAR = useParams()

    console.log("VAR ",VAR);


 
    // Fetching Details of the dynamic part of the path variable
    const {resID} = useParams()

    // Fetching data from Custom Hooks
    const resInfo = useRestaurantMenu(resID)
    console.log("RESINFO After Fetch", resInfo);

    // For Opening and Closing of the Accordian Menu Items
    const [showIndex, setShowIndex] = useState(0);



    if(resInfo===null)
    { console.log("resInfo is NULL")
        return <Shimmer/>}

    // Destructure

    console.log("resInfo SOHAM", resInfo?.data?.cards[0]?.card?.card);


    // const{name,costForTwoMessage,cloudinaryImageId,cuisines} = resInfo?.data?.cards[0]?.card?.card?.info;
//    const  {name,cuisines,costForTwoMessage} = resInfo?.data?.cards[0]?.card?.card?.info;
      const  {name,cuisines,costForTwoMessage} = resInfo?.data?.cards[2]?.card?.card?.info;


    // console.log("name :",name, "costForTwoMessage", costForTwoMessage, "cloudinaryImageId", cloudinaryImageId, "cuisines", cuisines)
    console.log("name :",name, "costForTwoMessage", costForTwoMessage)
    console.log("ITEMCARDS Debug", resInfo?.data?.cards[2]);

    const{itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card

    // console.log("Printing Card")
    // console.log(resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR);

    // console.log(itemCards)

    // Filtering By Item Category
    const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter( (currentItem) => currentItem?.["card"]?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    
    console.log("Filtered Category Cards")
    console.log("Filtered Category Cards",categories)


   

    // if we do not have data in the state variable,
    // show Shimmer, else show actual data
    return (
        <div className = " text-center dark:bg-black dark:text-white" data-testid="foodItems">
            <h1 className=" font-bold my-10 text-2xl">{name}</h1>
            <h3 className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</h3>
            <h2 className="py-6 font-bold">Menu</h2>
            {/* <ul>

                {itemCards.map((currentItem)=>(
                    <RestDetails key ={currentItem.card.info.id}  details = {currentItem.card.info}/>
                ))}
                 */}
{/* 
            </ul> */}

            {categories.map((category,index)=><RestaurantCategory key={category?.card.card. title} data= {category?.card.card} showItems = {index === showIndex? true:false}
                setShowIndex={()=> setShowIndex(index)}
            />)}



        </div>
    )
}
export default RestaurantMenu