import { createContext } from "react";



const UserContext = createContext(

// Inside the createContext we are passing a global object
// Each of it's attibutes is a global varibale
{

    loggedInUser : "Default User",
});


export default UserContext;

