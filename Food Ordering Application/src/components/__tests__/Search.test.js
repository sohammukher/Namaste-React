import {render} from "@testing-library/react";

import Body from "../Body";

import MOCK_DATA from "./mockData/mockRestListData.json"

import "@testing-library/jest-dom"

// Test Cant Make an API call as it is not running on a browser.
// Testing Never makes a real API clearAllListeners, we can test without Internet connection also
// We need to Mock our fetch() function
// because fetch() API is not Vanilla JS, it works only on Browsers.

// We are trying to mimic the "fetch()" our browser gives us.

// In the Browser:
// fetch() function returns us a "promise"
// that "promise" returns us a "JSON"
global.fetch = jest.fn(()=>{
// Resolve the "Promise" 
 return Promise.resolve({
    json:() =>{
        // "JSON" returned by promise
        return Promise.resolve(MOCK_DATA);
    }
 });
});


// INTEGRATION Testing
// Testing the functionality of the Search Module
it("Should render the Body Compinent with search Results ",()=>{

})