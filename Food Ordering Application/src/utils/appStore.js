import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./cartSlice"
import { useReducer } from "react";
import gptReducer from "./gptSlice"
import configReducer from "./configSlice"

const appStore = configureStore({
    // Main Reducer for the whole application
    // We will have as many reducers as many slices we have.
    reducer:{
        // we will add the cart reducer we have imported here.
        cart:cartReducer,
        // user:userReducer,

        gpt:gptReducer,

        config:configReducer,
    }
});


export default appStore;

