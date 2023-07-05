import { useEffect, useState } from "react" // Named Import
import Shimmer from "./Shimmer";
import {MENUAPI_URL} from "../utils/constant"
import { useParams } from "react-router-dom";

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

 
    // Fetching Details of the dynamic part of the path variable
    const {resID} = useParams()

    // Fetching data from Custom Hooks
    const resInfo = useRestaurantMenu(resID)

    if(resInfo===null)
    { console.log("resInfo is NULL")
        return <Shimmer/>}

    // Destructure
    const{name,costForTwoMessage,cloudinaryImageId,cuisines} = resInfo?.data?.cards[0]?.card?.card?.info

    const{itemCards} = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card

    // console.log(itemCards)

   

    // if we do not have data in the state variable,
    // show Shimmer, else show actual data
    return (
        <div className = "menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")} - {costForTwoMessage}</h3>
            <h3></h3>
            <h2>Menu</h2>
            <ul>

                {itemCards.map((currentItem)=>(
                    <RestDetails key ={currentItem.card.info.id}  details = {currentItem.card.info}/>
                ))}
                

            </ul>



        </div>
    )
}
export default RestaurantMenu