import {createSlice} from "@reduxjs/toolkit"


const cartSlice = createSlice({
    name : 'cart', // Name of the Slice

    // This is the Initial State Of our Slice
    // Currently has no data, Initially.
    initialState : {
        items:[]
    },

    // Here we will define Functions to 
    // Communicate with our redux store.
    reducers:{
        // Define Reducer Functions Here

        // Function 1 : To Add Items
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },

        // Function 2 : To remove one Item
        removeItem:(state, action)=>{

            // Write Logic To remove Item Here
            state.items.pop();
        },

        // Function 3 : To remove all Items
        clearCart:(state,action)=>{

            // Making the Cart Empty
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
export const{addItem,removeItem,clearCart} = carSlice.actions;

// Exporting the Reducer
export default cartSlice.reducer;