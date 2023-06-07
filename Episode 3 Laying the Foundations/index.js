import React from "react";
import  ReactDOM  from "react-dom/client";

// React.createElement => Object => HTML Element ( when we render) 

//Creating React Element Object
const heading = React.createElement("h1",{id:"head"},"Heading HERE From React")


//Creating Root
const root = ReactDOM.createRoot(document.getElementById("root"))


//Render the Element to the Root
root.render(heading) // At this Point the React Element is Converted into HTML Element





//JSX
 
const headingJSX = (
    <h1 className="Head ">
    JSX Heading
    </h1>
    )

console.log(headingJSX)

root.render(headingJSX)


//React Functional Component: It is a normal arrow function which returns JSX, Name Starts with caps
const HeadingComponent = () =>{

    return (<h1 className="Head ">
    JSX Heading
    </h1>)
}


// We can Write Arrow Function Directly Like below if just return statement
const HeadingComponent1 = () => (
<h1>
<HeadingComponent/>
    Functional Component ELEMENT
    </h1>
    )


// We can make a component as a normal function also
const HeadingComponent2 = function () {
    
    return // But A normal function will have to have a return 
    (
    <h1>
    <HeadingComponent/>
        Functional Component ELEMENT
        </h1>
        );
    };


//We can Render JS Variables on Page Using JSX

// We can make a component as a normal function also

let jsVariable = 1000
const HeadingComponent3 =  () => {
    
    return(
    <h1>
        <div>{jsVariable}</div>
    <HeadingComponent/>
        Functional Component ELEMENT
        </h1>
        );
    };


// We can put component inside element also
const ComponentInsideElement = () => { // Name Of Functional Components always in capital
    return (<div>CONTENT</div>);
}

const newElement = (
    <div>
        <ComponentInsideElement/>
        New Element
    </div>);

// ---------------------------------------------------------

// we can call code of a functional component inside any component, 
// because essentially it is just a JS Function
const newElement1 = (
    <div>
        {ComponentInsideElement()}
        New Element
    </div>);

// Rendering Functional Component to Page
root.render(newElement1)
