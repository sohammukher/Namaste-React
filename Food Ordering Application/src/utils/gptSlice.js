import {createSlice, current} from "@reduxjs/toolkit"

const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:false,
        gptFood:null,
        foodNames:null,
        cuisine:null,
    },
    reducers:{
        toggleGptSearchView: (state)=>{
            console.log(current(state));
            state.showGptSearch = !state.showGptSearch;
            console.log(current(state));

        },
        addGptFoodResult:(state,action)=>{
            // Multiple Data into Same Action

            const {foodNames, foodResults} = action.payload;

            state.gptFood = foodResults;
            state.foodNames = foodNames;
        },
        setCuisine:(state,action)=>{

            // Setting Cuisine
            cuisine= action.payload;
        }
    },
});

export const {toggleGptSearchView,addGptFoodResult} = gptSlice.actions;
export default gptSlice.reducer;