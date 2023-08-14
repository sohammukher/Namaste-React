import RestaurantCard from "../RestaurantCard"
// We can Directly Import From JSON file with One Object like this
// No need For variable Name
import MOCK_DATA from "./mockData/resCardMock.json"
import "@testing-library/jest-dom"

import {screen } from "@testing-library/react";
import {render } from "@testing-library/react";


it("Should render RestaurantCard component with props data", ()=>{

    // Passing the MOCK_DATA here as a prop
    render(<RestaurantCard resdata = {MOCK_DATA}/>);

    // Check if Restaurant Name Present in the Props
    const nameOfRestaurantName = screen.getByText(/Radhey/);
    

    // Assert
    expect(nameOfRestaurantName).toBeInTheDocument();
})