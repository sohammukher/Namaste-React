import React from 'react'
import { useSelector } from 'react-redux'
import  gptReducer from "../utils/gptSlice"
import FoodCard from './FoodCard';


const GptFoodSuggestions = () => {

  const gpt = useSelector(store=>store.gpt);

  const {foodNames, gptFood} = gpt;

//   console.log("GptFoodSuggestions",foodNames);
  console.log("GptFoodSuggestions",gptFood);



  if(!gptFood){
    console.log("Foods Cant Be Loaded")

    return null; /// Foods not loaded
    }

    console.log("Before Return")
  return (
    <div className='p-4 m-4 bg-yellow-400    text-white font-bold text-lg flex flex-wrap  rounded-xl dark:bg-black'>
    
        {gptFood && gptFood.map((currentItem) => (
  <FoodCard resdata={currentItem.food} key={currentItem.food.foodId} />
))}        

    </div>
  )
}

export default GptFoodSuggestions