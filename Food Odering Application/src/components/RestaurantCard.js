import styleCard from "../index"
import { RESTAURANT_IMG } from "../utils/constant"

const RestaurantCard = (props) =>{ // Using Props here

    // Now resdata has all the contents of props
    const {resdata} = props // Destructing

    const {name,cuisines,avgRating,costForTwo,deliveryTime} = resdata?.data


    return (
        <div className = "restaurant-card" style ={styleCard}> 
            <img  className = "res-logo" alt="Image Not Loaded" src={RESTAURANT_IMG+resdata.data.cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")} </h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo} </h4>
            <h4>{deliveryTime} </h4>
            
        </div>
    )
}

export default RestaurantCard;