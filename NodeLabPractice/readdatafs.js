// Create a node program that read data from file 
// and display it on console using “fs “ module.
const fs = require('fs');
fs.readFile("Demo.txt",(error,data)=>{
    if(error)
    {
        console.log("Error Occurred!!!");
    }
    else
    {
       console.log(data.toString());
    }
})