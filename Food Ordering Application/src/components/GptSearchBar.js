import React, { useRef } from 'react'
import { lang } from '../utils/languageConstants'
import cartSlice from '../utils/cartSlice'
import { useSelector } from 'react-redux'
// import gptSlice from '../utils/gptSlice'
import openai from "../utils/openai"

const GptSearchBar = () => {

    const langKey = useSelector((store)=>store.config.lang);

    // {lang[langKey].gptSearchPlaceHolder}

    const searchText = useRef(null);


    //Search Food Item in the API:
    const APP_ID="042f3ec0";
    const APP_KEY = "58bfafaa8ec7edba05d3d30f8dd3a4f6"
    const BASE_URL = "https://api.edamam.com/api/food-database/v2/parser?app_id=042f3ec0&app_key=58bfafaa8ec7edba05d3d30f8dd3a4f6&ingr=Pizza&nutrition-type=logging&category=generic-foods";

    // Search For Food Item
    const searchFoodItem = async(foodItem) =>{
        console.log("Inside Search Food Item ",foodItem)
        const data = await fetch("https://api.edamam.com/api/food-database/v2/parser?app_id=042f3ec0&app_key=58bfafaa8ec7edba05d3d30f8dd3a4f6&ingr=Pizza&nutrition-type=logging&category=generic-foods");

        console.log("API DATA",data)

        const json = await data.json();
        
        return json;
    }

    const handleGptSearchClick = async () =>{

        console.log(searchText.current.value);

        // Make GPT API Call to Get Movie Results.

        const GPTQuery = "Act as a Food Recomendation System and Suggest some food items for the query "+searchText.current.value +". Only Give me names of top 5 food Items. Give this in comma seperated format. Like the example result: eg: Pizza, Burger,Crossant , Pastry.";

        const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: GPTQuery }],
            model: 'gpt-3.5-turbo',
          });

          console.log(gptResults.choices?.[0]?.message?.content);
          const foodList = gptResults.choices?.[0]?.message?.content.split(","); // Making Array

          console.log("Array ",foodList);


          // For Each Item we need to Search
          const promiseArray = foodList.map(foodItem => searchFoodItem(foodItem));

          // Result Will be Array of 5 Promises
          const results = await Promise.all(promiseArray);

          console.log("FOOD RESULTS ",results);

        //   return results;


    }

  return (
    <div className='pt-[2%] flex justify-center '>
        <form className='w-1/2 bg-yellow-500 grid grid-cols-12 rounded-lg opacity-95' onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText} type='text'className='p-4 m-4  col-span-9 rounded-lg font-semibold' placeholder={lang[langKey].gptSearchPlaceHolder}></input>
            <button className='py-2 px-4 bg-blue-500 text-white rounded-lg col-span-3 m-4  font-semibold'
            onClick={handleGptSearchClick}
             >{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar