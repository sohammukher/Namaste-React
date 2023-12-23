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
            <div className=" bg-black rounded-lg mx-2 my-5 px-5 py-2">

<h5 className="text-3xl font-bold  text-orange-500 animate-pulse mb-2 px-2  shadow-md" >About Project</h5>


<span className="text-xl font-bold text-yellow-500 animate-pulse mb-2 px-2">
<div class="text-3xl font-bold text-yellow-500 animate-pulse mb-2">
Created as a Part Of SOEN 498 H, HCI Final Project.
</div>

  <div class="text-3xl font-bold text-yellow-500 animate-pulse mb-2">
  Professor: Marta Kersten-Oertel
  </div>
</span>
            
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