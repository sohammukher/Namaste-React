import React from "react";
import  ReactDOM  from "react-dom/client";

// const heading = document.createElement("h1");

// heading.innerHTML="Hello World";


// const root = document.getElementById("root")

// root.appendChild(heading)

//Above JS Code Rewritten in React
console.log("REACT")

// (TAG_TYPE, {ATTRIBUTE}, CONTENT)
const heading = React.createElement("h1",{id:"heading"},"Hello World From React!!");

const reactRoot = ReactDOM.createRoot(document.getElementById("root")); // Create Root For React

// reactRoot.render(heading); // Rendering the Heading Inside React Root



// ------------------------------


// Building Below Structure

/* <div id = "parent">
    <div id = "child">
        <h1 id = "head"></h1>

    </div>
</div> */

const heading2 = React.createElement("h1",{id:"head1"},"Heading 2")

const parent = React.createElement("div",{id: "parent"}, 
                React.createElement("div",{id: "child"}, 
                React.createElement("div",{id: "innerChild"},[heading,heading2])
                )
)

reactRoot.render(parent)