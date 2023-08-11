import React from "react"

class UserClass extends React.Component{


    constructor(props){// Define a constructor with "props" as a param

        console.log("Parent Constructor Called")

        super(props);// pass the props to superclass

        console.log(this.props)

        // Create a state variable:
        // just like the use state hook.

        this.state ={
            count :0,
            userInfo:{
                name:"Dummy",
                location:"Defualt Location",
                contact:"email",
                bio:"bio",
                displayPicture:"",
                
            }
        }
    }

    async componentDidMount(){
        console.log(this.props.name+" componentDidMount()")


            const data = await fetch("https://api.github.com/users/sohammukher")

            const dataJSON = await data.json();

            console.log("Data Fetched Successfully")
            console.log(dataJSON)


            this.setState({
                name : dataJSON.login,
                location:dataJSON.location,
                contact: dataJSON.url,
                bio:dataJSON.bio,
                displayPicture:dataJSON.avatar_url,
                
            })

        
    }

    componentDidUpdate(){
        console.log("Whole Cycle Ended......UPDATE COMPLETED")
    }

    componentWillUnmount(){
        console.log("Component Will Unmount Called")
    }

    render(){ // render() method returns a JSX.


        console.log(this.props.name+" Render()")

        // const {name,location,contact} = this.props

        // Destructure the state variable
        const {count} = this.state

        return ( // This is just a copy paste from a functional component
            <div className='user-card'>
                <img className="displayPic" src={this.state.displayPicture}/>
                <h2>{this.state.name}</h2>
                <h3>{this.state.location}</h3>
                <h4>Contact: {this.state.contact}</h4>
                <h5>About Me</h5>
                <p>{this.state.bio}</p>

                <h1>{count}</h1>

                <button onClick={()=>{

                    //Never set the state directly
                    this.setState({
                        
                        count:this.state.count+1
                    })
                }}>Increase Count</button>
            </div>
          )
    }

    
}

export default UserClass