import {fireEvent, render,screen,waitFor} from "@testing-library/react";

import Body from "../Body";
// import React from 'react';

import MOCK_DATAS from "./mockData/mockRestListData.json";
import {act} from "react-dom/test-utils";
import "@testing-library/jest-dom";
import '@testing-library/jest-dom/extend-expect';



import { BrowserRouter } from "react-router-dom";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import "@testing-library/jest-dom"

import React from 'react';
import ReactDOM from 'react-dom';
// import { render } from '@testing-library/react';

// Your test cases


// Test Cant Make an API call as it is not running on a browser.
// Testing Never makes a real API clearAllListeners, we can test without Internet connection also
// We need to Mock our fetch() function
// because fetch() API is not Vanilla JS, it works only on Browsers.

// We are trying to mimic the "fetch()" our browser gives us.

// In the Browser:
// fetch() function returns us a "promise"
// that "promise" returns us a "JSON"
// global.fetch = jest.fn(()=>{
// // Resolve the "Promise" 
//  return Promise.resolve({
//     json:() =>{
//         // "JSON" returned by promise
//         console.log(MOCK_DATA)
//         return Promise.resolve(MOCK_DATA);
//     }
//  });
// });

global.fetch = jest.fn(() => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve(MOCK_DATAS);
      },
    });
  });


// INTEGRATION Testing
// Testing the functionality of the Search Module
it("Should render the Body Compnent with search Results ", async ()=>{
    
// Wrap render method inside act() function,
// whenever we are doing fetch() or "State Update"

// Debug :

// console.log(global.fetch)

// act returns a promise so we need to await it.
// act is a function which takes a callback function( async function), this async function will return the render.
await act(async () =>
render(
  <BrowserRouter>
    <Body />
  </BrowserRouter>
)
);

// Check if our searchBtn is rendered

        const searchBtn = screen.getByRole("button",{name:"Search"});
        // const searchBtn = screen.getByRole("button",);

        // console.log(searchBtn);

        // Check for Search Input Event
        expect(searchBtn).toBeInTheDocument();


        
    });

// -------------------------------------------------------------------------------------
// Test TO check Search Button Functionality
it("Should Render Search Results as typed by user",async ()=>{
    await act(async () =>
    render(
    <BrowserRouter>
    <Body />
    </BrowserRouter>
));

// Initially greater than 0
const cardsBeforeSearch = screen.getAllByTestId("resCard");
console.log(cardsBeforeSearch);
expect(cardsBeforeSearch.length).toBeGreaterThan(0);



const searchBtn = screen.getByTestId("searchButton");
console.log(searchBtn);

// get seachinput
const searchInput = screen.getByTestId("searchInput");
console.log(searchInput);

// changing textInside SearchBox:

// Type something inside the Box
fireEvent.change(searchInput,{target:{value:"KFC"}});
// Basically Simulating:  onChange={(e)=>setUserName(e.target.value)}

// Click on the search button:
fireEvent.click(searchBtn);

// screen should load 0 result cards
// Each Resturant card is a div.
// We need to find this inside a div.
// We will find this using a "data-testid=resCard"
const cards = screen.getAllByTestId("resCard")

// Expecting zero Cards
expect(cards.length).toBe(0);

});



it("Should Filter Top Rated Restaurant", async ()=>{

    await act(async()=>
        <BrowserRouter>
            <Body/>
        </BrowserRouter>
    );


    // Checking Number of Restaurants before filter
    const cardsBeforeFilter = screen.getAllByTestId("resCard");

    expect(cardsBeforeFilter.length).toBeGreaterThan(2);

    // getting the top rated button
    const topRatedBtn = screen.getByRole("button",{name:"Top Rated Restaurants"});

    //Click on the Top Rated Button
    fireEvent.click(topRatedBtn);

    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBeGreaterThan(1);

})