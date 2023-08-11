import {createSlice, current} from "@reduxjs/toolkit"


const cartSlice = createSlice({
    name : 'cart', // Name of the Slice

    // This is the Initial State Of our Slice
    // Currently has no data, Initially.
    initialState : {
        // Here items is the variable we choose hence we will modify this will below reducers.
        items:[], // Some Dummy data
    },

    // Here we will define Functions to 
    // Communicate with our redux store.
    reducers:{
        // Define Reducer Functions Here

        // Function 1 : To Add Items

            // dispatch will send it like:
            // {
            //     payload:"Pizza"
            // }
        addItem:(state,action)=>{
            // We are Mutating/ Modifying our state here.
            state.items.push(action.payload);
        },

        // Function 2 : To remove one Item
        removeItem:(state, action)=>{

            // Write Logic To remove Item Here

            // We are Mutating/ Modifying our state here.

            state.items.pop();
        },

        // Function 3 : To remove all Items
        clearCart:(state,action)=>{

            // Making the Cart Empty

            // We are Mutating/ Modifying our state here.

            // To Print the Current State we need to do below, normal console.log will not work:
            console.log(current(state));
            state.items.length = 0;

            // If we do :
            // state = [];
            // it will not work, because the state varibale which we 
            // are accessing is a local variable it will not modify the actual
            // parameter which is passed.

            // Here we can also do -> return {[items:[]]} 

            // This will work because in RTK we can return the new state or mutate the current state.
            // Whatever we return will replace our initial state which we recieved in our parameter.
        }


    }

})

// ---------------------------------
// The createSlice will return an Object to us in the form of:

// {
//     actions:{
//         addItem,
//         ...
//     },
//     reducer
// }

// ----------------------------------
// Export the Actions

// We will destructure to select the specific actions we want
export const{addItem,removeItem,clearCart} = cartSlice.actions;

// Exporting the Reducer : this is a combination of all reducers we defined above.
export default cartSlice.reducer;