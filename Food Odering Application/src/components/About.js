import UserClass from "./UserClass"

import React from "react";

// Importing UserContext
// import UserContext from "../utils/UserContext";

import UserContext from "../utils/UserContext.js"



class About extends React.Component{

    constructor(){
        super()
        console.log("Parent Constuctor");
    }

    componentDidMount(){
        console.log("Parent componentDidMount()");
    }

    render(){

        console.log("Parent render().");
        return(
            <div>
            <h1>About</h1>
            <h2>Project Created as a Part Of Namaste React Web Series</h2>
            
            {/* Basically context_name.Consumer */}
            <UserContext.Consumer>
            {/* Inside this we need to write a callback function to access the data */}
            {(data)=> console.log(data.loggedInUser)}

            </UserContext.Consumer>

            
            <UserClass name = {"SOHAM"} location = {"Montreal"} contact ={"sohammukherjee1996@gmail.com"}/>
            </div>
        );
    }

}

export default About