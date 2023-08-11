import { render, screen } from "@testing-library/react";
import Contact from "../Contact";

import "@testing-library/jest-dom";

test('Should Load Contact Us Component ', 
() => { render(<Contact/>)  
// If Contact Component is rendered all its children will be be rendered.

// Below will give all the heading Components in the Rendered Component
 const heading = screen.getByRole("heading");

 // Will Check if "heading" will be inside the "screen" or not.
 // To Use toBeInTheDocument() we need to Install -->  npm i -D @testing-library/jest-dom
 expect(heading).toBeInTheDocument();
})


test('Should Load Button Inside the Contact Component ', 
() => { render(<Contact/>)  
// If Contact Component is rendered all its children will be be rendered.

// Below will give all the button Components in the Rendered Component
 const button = screen.getByRole("button");

 // Will Check if "button" will be inside the "screen" or not.
 // To Use toBeInTheDocument() we need to Install -->  npm i -D @testing-library/jest-dom
 expect(button).toBeInTheDocument();
})

// We can Find Components By "Place Holder Also."
test('Should Load Button Inside the Contact Component ', 
() => { render(<Contact/>)  
// If Contact Component is rendered all its children will be be rendered.

// Below will give all the "name" Components in the Rendered Component
 const name = screen.getByPlaceholderText("Name");

 // Will Check if "name" will be inside the "screen" or not.
 // To Use toBeInTheDocument() we need to Install -->  npm i -D @testing-library/jest-dom
 expect(name).toBeInTheDocument();
})