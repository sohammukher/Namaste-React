import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header"
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

it("should load header component with a login button",()=>{

    // Render

    // Case 1
    // render(
    // <Header/>
    // );

    // Above will fail because there is Redux in this
    // We need to Provide the Store to Our Header

    // Case 2
    // render(
    //     <Provider store={appStore}>
    //     <Header/>
    //     </Provider>
    //     );


    // It will Fail Again, because it does not know how to process
    // the "LinkTo" Component, which is a part of the "react-router-dom"

    // Case 2 : Suceess
    // We need to provide our app the 
    // import { BrowserRouter } from "react-router-dom";
    // Now Our LinkTo Part will also work.

    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>
        );


        // Query
        // const loginButton = screen.getByRole("button");

        // Another way to Query, But this is noot a good way. Better way is "getByRole"
        // const loginButton = screen.getByText("button");


        // We can Query Using More Specific Parameters like:
        // Name of the Button is Login Button
        const loginButton = screen.getByRole("button",{name:"Login"});


        // Assert 
        // Check if the Button is in the Document
        expect(loginButton).toBeInTheDocument();


})


// Cart - 0 Items --> Displayed on page Check

it("Should render Component with a Cart Item ",()=>{

    // Render
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>
        );

        // Query: Here we are Using "Regex"
        const cartItems = screen.getByText(/Cart/);

        // Assertion
        expect(cartItems).toBeInTheDocument();

})

 

