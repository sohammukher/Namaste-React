import {useDispatch, useSelector} from "react-redux"
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
// import { useDispatch } from "react-redux";

const Cart = () =>{

    // Subscribe to Cart Items:
    const cartItems = useSelector((store)=> store.cart.items);
    
    //  More Inefficient Way To Subscribe:
    // const store = useSelector((store)=>store);

    // const cartItems = store.cart.items; 

    console.log(cartItems)

    // Function To Handle Clear Cart:

    const dispatch = useDispatch();
    const handleClearCart = () =>{
        dispatch(clearCart());
    }


    return <div className="text-center m-4 p-4">
    <h1 className=" text-2xl font-bold">Cart</h1>

    <div className=" w-6/12 m-auto">

    <button className=" p-2 m-6 bg-black text-white rounded-md" onClick={handleClearCart} >
    Clear Cart
    </button>

    {cartItems.length===0?<h1>No Items In Your Cart, Please Add Some !!</h1>:<ItemList data={cartItems}/>}
    
    </div>

    </div>
}

export default Cart;