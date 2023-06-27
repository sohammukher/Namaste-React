import UserClass from "./UserClass"

import React from "react";



class About extends React.Component{

    constructor(){
        super()
        console.log("Parent Constuctor");
    }

    componentDidMount(){
        console.log("Parent componentDidMount()");
    }

    render(){

        console.log("Parent render()");
        return(
            <div>
            <h1>About</h1>
            <h2>This is Namaste React Web Series</h2>
            <UserClass name = {"SOHAM"} location = {"Montreal"} contact ={"sohammukherjee1996@gmail.com"}/>
            </div>
        );
    }

}

export default About