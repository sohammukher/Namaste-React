import ItemList from "./ItemList.js"
import { useState } from "react";

const RestaurantCategory = (props) =>{

    const{data} = props;

    // Use State to control the show and hide of the Items
    

    console.log("RestaurantCategory Data")
    console.log(data)

    return (<div>
        {/* Accordian Header */}
        <div className="w-6/12 bg-grey shadow-lg mx-auto my-4 justify-between border-2 rounded-lg text-lg  bold flex-wrap">

        <div className="text-left px-4 py-2 justify-between hover:cursor-pointer" style={{ display: "flex", alignItems: "center" }} onClick={()=>{
            console.log("Clicked")

        }}  >
        <span className="font-semibold">{data.title} ({data.itemCards.length})</span>
        <span className="px-4">⬇️</span>
        </div>


        {/* Accordian Body */}

        <ItemList items data={data.itemCards}/>
        </div>


    </div>)
}

export default RestaurantCategory