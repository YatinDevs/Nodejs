//wap to read content of a file and display it on console
const fs= require('fs')//filesystem

//fs.mkdir("test",()=>console.log("directory created"))
fs.readFile("readfile.js",function(err,data){
 
    if(err)
       throw err
    else
      console.log(data.toString())
})
console.log("================================")

