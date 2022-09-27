//wap to read content of a file and display it on console
const fs= require('fs')
//filesystem

// call back function 
/*
function(err,data){
 
  if(err)
       throw err
    else
      console.log(data.toString())
})
*/

//fs.mkdir("test",()=>console.log("directory created"))
fs.readFile("writefileexample1.js",function(err,data){
 
    if(err)
       throw err
    else
      console.log(data.toString())
})
console.log("================================")

//fs.mkdir("test2",()=>console.log("directory created"))
/*
fs.readFile("readfile1.js")
console.log("=========End of file=======================")

TypeError [ERR_INVALID_CALLBACK]: Callback must be a function. Received undefined
*/