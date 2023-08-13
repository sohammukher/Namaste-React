import { render, screen } from "@testing-library/react";
import Contact from "../Contact";

import "@testing-library/jest-dom";

describe("Test Cases for Contact Us Component",()=>{

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

test("Should load 2 input Boxes on the Contact Component",()=>{

    render(<Contact/>);

    // "textbox" is the Role for "inputBox"
    // Even if we do wrong there will be suggestions which will be enough.

    // We need to do "getAllByRole" here because if we do "getByRole"
    // many elements satisfy the query and we will get an error
    const inputBoxes = screen.getAllByRole("textbox");


    // We can Do console.log here
    console.log(inputBoxes[0]);
    console.log(inputBoxes[1]);

    // What Output we see above
    // --> it will be a react Element from the virtual DOM
    // --> Always Remember  JSX OR React Fiber Node OR JS Object, Virtual DOM Obj all the same thing


    // Assertion
    // We Expect 2 Input Fields in this.
    expect(inputBoxes.length).toBe(3)

    // We can also do inverse like:
    // expect(inputBoxes.length).not.toBe(3)

})
})
