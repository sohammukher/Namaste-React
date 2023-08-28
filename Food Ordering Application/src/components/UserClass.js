import React, { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      userInfo: {
        name: "Dummy",
        location: "Default Location",
        contact: "email",
        bio: "bio",
        displayPicture: "",
      },
    };
  }

  async componentDidMount() {
    console.log(`${this.props.name} componentDidMount()`);

    try {
      const response = await fetch("https://api.github.com/users/sohammukher");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const dataJSON = await response.json();
      console.log("Data Fetched Successfully");
      console.log(dataJSON);

      this.setState({
        name: dataJSON.login,
        location: dataJSON.location,
        contact: dataJSON.url,
        bio: dataJSON.bio,
        displayPicture: dataJSON.avatar_url,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  componentDidUpdate() {
    console.log("Component Update Completed");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount Called");
  }

  render() {
    console.log(`${this.props.name} Render()`);
    const { count } = this.state;

    return (
      <div className="user-card p-4 bg-black text-blue-400 rounded-lg shadow-lg mx-2">
        <img
          className="displayPic w-26 h-26 rounded-full mx-auto mb-4 hover:scale-120 transition-transform transform"
          src={this.state.displayPicture}
          alt="User Avatar"
        />
        <h2 className="text-3xl font-bold text-yellow-500 animate-pulse mb-2">
          Soham Mukherjee
        </h2>
        <h2 className="text-3xl font-bold text-yellow-500 animate-pulse mb-2">
         GitHub Username: {this.state.name}
        </h2>
        <h3 className="text-xl mb-2 text-yellow-300 animate-pulse font-bold">
        Location  {this.state.location}, Canada
        </h3>
        <h4 className="text-lg mb-4 text-yellow-400 animate-pulse">
          Contact: {this.state.contact}
        </h4>
        <p className="text-gray-400 text-yellow-200 animate-fade-in">
          {this.state.bio}
          <br />

        </p>

        <h1 className="text-2xl mt-6 text-yellow-300">Likes Count: {count===0?"Please Like!!!":count}</h1>

        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full mt-4 focus:outline-none transition-transform transform hover:scale-105"
          onClick={() => {
            this.setState((prevState) => ({
              count: prevState.count + 1,
            }));
          }}
        >
          Like 👍
        </button>
      </div>
    );
  }
}

export default UserClass;
