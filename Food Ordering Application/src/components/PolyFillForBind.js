
let name = {
    firstname : "Akshay",
    lastname : "Saini"
}

// Remember Normal Function not Arrow Function
let printName = function (hometown, state){
    console.log(this.firstname+" "+this.lastname+" "+ hometown+ " "+state)
}

// --------------- NORMAL BIND() FUNCTION--------------
// The parameter we are passing here will replace the "this" in the function
// and Return the function with the "this" replaced 
printMyName = printName.bind(name,"Dehradun","UK");
// Execute Method
printMyName(); 

//-----------------OWN IMPLEMENTATION OF THE BIND() METHOD----------
Function.prototype.mybind = function(...args){
// This --> printName PaymentMethodChangeEvent, the calling function "function.mybind"
let obj = this;

// Extrating all other arguements except the first
let params = args.slice(1); // Will Remove the First Element and Return the Array


return function(...args2){ // this parameter is for passing the parameters on calling the function after using the bind() to set certain
    // Fixed Values in the Arguements

    // apply(this,[args])
    obj.apply(args[0],[...params,...args2]);
}

}

console.log("Our Implementation O/P")
let printMyName2 = printName.bind(name);
printMyName2("Dehradun","UK")