// RestaurantCard.test.js
import React from "react";
import { render } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard"; // Update the path to your component

// Basic test to check if the component renders without errors
test("renders RestaurantCard without crashing", () => {
  const mockResdata = {
    name: "Mock Restaurant",
    cuisines: ["Cuisine 1", "Cuisine 2"],
    avgRating: 4.5,
    costForTwo: 30,
    deliveryTime: "30 minutes",
    cloudinaryImageId: "mock-image-id"
  };

  render(<RestaurantCard resdata={mockResdata} />);
});
