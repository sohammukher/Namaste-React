import styleCard from "../index"
import { RESTAURANT_IMG } from "../utils/constant"

const RestaurantCard = (props) =>{ // Using Props here

    // Now resdata has all the contents of props
    const {resdata} = props // Destructing

    const {name,cuisines,avgRating,costForTwo,deliveryTime} = resdata?.data


    return (
        <div className = " shadow-xl m-4 p-4 w-[220px] h-[370px] rounded-xl items-center border-2 border-orange-500 hover:border-4" > 
            <img  className = "rounded-md px-4 shadow-sm bg-white border-slate-950"  alt="Image Not Loaded" src={RESTAURANT_IMG+resdata.data.cloudinaryImageId}></img>
            <h3 className="py-3 font-semibold font-serif">{name}</h3>
            <h4>{cuisines.join(", ")} </h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo} </h4>
            <h4>{deliveryTime} </h4>
            
        </div>
    )
}

export default RestaurantCard;