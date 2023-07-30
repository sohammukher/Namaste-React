import {createSlice} from "@reduxjs/toolkit"


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

            state.items.length = 0;
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

// Exporting the Reducer
export default cartSlice.reducer;