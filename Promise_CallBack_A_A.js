// Async JS Programming


const data = [
    {name: "Munai", profession : "Software Engineer"},
    {name: "Gunja", profession : "Software Engineer"},

]
let output = ""
function getData(){

    setTimeout(()=>{

        data.forEach((data,index)=>{
            output+=<li>$(data.name)</li>
        })

    },2000);
}