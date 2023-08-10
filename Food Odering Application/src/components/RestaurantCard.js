import styleCard from "../index"
import { RESTAURANT_IMG } from "../utils/constant"

const RestaurantCard = (props) =>{ // Using Props here


    console.log("Inside RestaurantCard, Printing "+props)

    

    // Now resdata has all the contents of props
    const {resdata} = props // Destructing

    // Printing to see the Data:
    console.log(resdata)

    const {name,cuisines,avgRating,costForTwo,deliveryTime} = resdata


    return (
        <div className = " shadow-xl m-4 p-4 w-[240px] h-[370px] rounded-xl items-center border-2 border-orange-500 hover:border-4" > 
            <img  className = "px-1 mx-4 shadow-sm bg-white border-slate-950 rounded-xl"  alt="Image Not Loaded" src={RESTAURANT_IMG+resdata.cloudinaryImageId}></img>
            <h3 className="py-3 font-semibold font-serif">{name}</h3>
            <h4>{ cuisines.slice(0, 4).join(", ")} </h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo} </h4>
            <h4>{deliveryTime} </h4>
            
        </div>
    )
}

// Higher Order Function:

// Taking RestaurantCard as an Input
export const withPromotedLabel =(RestaurantCard)=>{

    // We are returning Another Component,
    // Components are Functions so we are returning Function Here.

    // We will need to Pass the Data to the Restuarant Card.

    
    return (props) =>{
    return(<div>
        <label className="absolute left-4  bg-slate-700 m-2 p-2 rounded-lg   text-slate-100">Promoted</label>

        <RestaurantCard {...props} />
    </div>) 
    }
} // Finally Do not Forget to Export This.

export default RestaurantCard;



