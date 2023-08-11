import { useEffect, useState } from "react";

import {MENUAPI_URL}  from "./constant"

const useRestaurantMenu =(resID) =>{ // Info is Restaurant ID

    // like out components we can have state variables inside our hooks as well.

    const [resInfo, setresInfo] = useState(null);

    // Fetching data with this.
    const fetchData = async() =>{

        const data = await fetch(MENUAPI_URL+resID)

        const dataJSON = await data.json();

        setresInfo(dataJSON)

    }
    useEffect(()=>{

        console.log("Data Fetched By Custom Hooks")

        fetchData();

    },[]) // Empty [] --> we will call this only once.

    return resInfo; // Return restaurant Info

}

export default useRestaurantMenu