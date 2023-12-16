import {createSlice, current} from "@reduxjs/toolkit"

const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:false,
    },
    reducers:{
        toggleGptSearchView: (state)=>{
            console.log(current(state));
            state.showGptSearch = !state.showGptSearch;
            console.log(current(state));

        },
    },
});

export const {toggleGptSearchView} = gptSlice.actions;
export default gptSlice.reducer;