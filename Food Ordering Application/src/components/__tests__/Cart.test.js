import RestaurantMenu from "../RestaurantMenu.js"
import { fireEvent, render,screen } from "@testing-library/react"
import {act} from "react-dom/test-utils" 
import { BrowserRouter } from "react-router-dom"
import MOCK_DATA from "./mockData/mockMenu.json"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import "@testing-library/jest-dom"
import Header from "../Header"
import Cart from "../Cart"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=> Promise.resolve(MOCK_DATA)
    })
});

it("Should Load Restaurant menu component", async()=>{

    await act(async ()=> render(<Provider store ={appStore}>
    <RestaurantMenu/></Provider>));

    const accordianHeader = screen.getByText(/Recommended/);

    console.log(accordianHeader);

    // Clicking the Accordian Header
    fireEvent.click(accordianHeader);

    // We Expect it to Expand 
    const foodItems = screen.getAllByTestId("foodItems");

    //Expect More than 1 Items
    expect(foodItems.length).toBeGreaterThan(0);
});

it("Should add item to the Cart when we Click Add + Button ",async ()=>{
    await act(async ()=> render(<BrowserRouter>
    <Provider store ={appStore}>
    <Header/>
    <RestaurantMenu/>
    </Provider>
    </BrowserRouter>));

    // Query to get all Add Buttons
    const addBtns = screen.getAllByText(/Add/);

    //Click On the First Button
    fireEvent.click(addBtns[0]);

    // Now we can Expect the header to change to "Cart = (0)"
    expect(screen.getByText("Cart - 1 Items")).toBeInTheDocument();

    // Adding 2 Items
    fireEvent.click(addBtns[1]);
    expect(screen.getByText("Cart - 2 Items")).toBeInTheDocument();

})

// Check if Cart Page has 2 Items After Adding 2 Items
it("Should check if cart has 2 Items after adding 2 Items",async ()=>{

    await act(async ()=> render(
        <BrowserRouter>
        <Provider store ={appStore}>
        <Header/>
        <RestaurantMenu/>
        <Cart/>
        </Provider>
        </BrowserRouter>));

        // Query to get all Add Buttons
        const addBtns = screen.getAllByText(/Add/);

        // ** 4 From Before and 4 from Now
        //Click On the First Button
    
        // Adding 2 Items
        fireEvent.click(addBtns[1]);
        fireEvent.click(addBtns[0]);

        expect(screen.getByText("Cart - 4 Items")).toBeInTheDocument();

        // Now Check if Cart has 4 items in the List
        const foodItems = screen.getAllByTestId("foodItems");

        //Check if Length === 4
        // expect(foodItems.length).toBe(4);

        // *** Very imp Point : No need to Navigate/ Go to Cart Page
        // ALl the Components are loaded one by one, so "screen." will refer to all the components
        // which are rendered above

        fireEvent.click(screen.getByRole("button",{name:"Clear Cart"}));

        expect(screen.getByText(/No Items/)).toBeInTheDocument();



})