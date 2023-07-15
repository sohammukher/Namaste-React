// import {RESTAURANT_IMG}  from "../utils/constant"

const RESTAURANT_IMG = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_160,h_150/"

const ItemList = (props) =>{

    const {data} = props;

    console.log(data)


    return (<div>        
        {data.map((currentItem)=>

        <div className="">

        <div key = {currentItem?.card?.info?.name} className="py-5 border-b-2 border-gray-200 flex justify-between">



        <div className="w-9/12">

        <div>
        <span>{currentItem?.card?.info?.name}</span>
        <span className="px-2 py-1 text-sm font-semibold">₹{currentItem?.card?.info?.price?currentItem?.card?.info?.price/100:299}</span>
        </div>

        <div className="text-xs text-left py-2 px-5">
        {currentItem?.card?.info?.description}
        </div> 

        </div>


        <div className="">
        <button className="absolute px-3 mx-3  rounded-lg   my-1 bg-orange-600 text-black  font-semibold align-bottom ">Add ➕</button>
        </div>


        <img src={RESTAURANT_IMG+currentItem?.card?.info?.imageId} className="w-3/12  mx-2  rounded-lg  justify-around"></img>



        </div>



        </div>

        )
        }
        
    </div>)
}

export  default ItemList;