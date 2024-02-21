import { useEffect, useState } from "react";

import {MENUAPI_URL}  from "./constant"

const useRestaurantMenu =(resID) =>{ // Info is Restaurant ID

    // like out components we can have state variables inside our hooks as well.

    const [resInfo, setresInfo] = useState(null);

    // Fetching data with this.
    const fetchData = async() =>{

        const data = await fetch("https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Fmenu%2Fpl%3Fpage-type%3DREGULAR_MENU%26complete-menu%3Dtrue%26lat%3D17.3935543%26lng%3D78.6039862%26restaurantId%3D"+resID)

        const dataJSON = await data.json();

        console.log("Restaurant Data Fetched ",dataJSON)

        setresInfo(dataJSON)

    }
    useEffect(()=>{

        console.log("Data Fetched By Custom Hooks")

        fetchData();

    },[]) // Empty [] --> we will call this only once.

    return resInfo; // Return restaurant Info

}

export default useRestaurantMenu