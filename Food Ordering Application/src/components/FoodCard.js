import styleCard from "../index"
import { RESTAURANT_IMG } from "../utils/constant"

const FoodCard = (props) =>{ // Using Props here


    console.log("Inside FoodCard, Printing ");
    console.log(props)

    

    // Now resdata has all the contents of props
    const {resdata} = props // Destructing

    // Printing to see the Data:
    console.log(resdata)

    // const {food} = resdata

    // console.log("FOOD CARD",food)


    return (
        
        // <div  data-testid="resCard" className = " bg-white dark:bg-neutral-600 dark:text-white shadow-xl m-4 p-4 w-[240px] h-[370px] rounded-xl items-center border-2 border-orange-500 hover:border-4 "> 
        //      <img  className = "px-2 mx-4 shadow-sm bg-white border-slate-950 rounded-xl "  alt="Image Not Loaded" src={resdata.image}></img>
        //      <h3 className="py-3 font-semibold font-serif text-black">{resdata.label}</h3>
    
        // </div>

        <div data-testid="resCard" className="flex flex-col items-center bg-white dark:bg-neutral-600 dark:text-white shadow-xl m-4 p-4 w-[290px]  rounded-xl border-2 border-orange-500 hover:border-4">
  <img className="mx-auto my-2 shadow-sm bg-white border-slate-950 rounded-xl" alt="Image Not Loaded" src={resdata.image} />
  <h3 className="py-3 font-semibold font-serif text-black dark:text-white">{resdata.label}</h3>
  {/* <h3 className="py-3 font-semibold font-serif text-black">Nutrition</h3> */}
  <h7 className="py-3 font-semibold font-serif text-black dark:text-white">Carbs: {resdata.nutrients.CHOCDF}</h7>
  <h7 className="py-3 font-semibold font-serif text-black dark:text-white">Calories: {resdata.nutrients.ENERC_KCAL}</h7>
  <h7 className="py-3 font-semibold font-serif text-black dark:text-white">Fats: {resdata.nutrients.FAT}</h7>
  <h7 className="py-3 font-semibold font-serif text-black dark:text-white">Fiber: {resdata.nutrients.FIBTG}</h7>
  <h7 className="py-3 font-semibold font-serif text-black dark:text-white">Protien: {resdata.nutrients.PROCNT}</h7>



</div>

        
    )
}


export default FoodCard;



