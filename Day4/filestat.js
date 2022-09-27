// const / var/let to define
// var - variable can be defined again and also can be changed
// const - variable cannot be defined again and also cannot be changed
// no one can reference it again using const /
const fs = require('fs')

// to delete the file from database or folder
fs.unlink("test2.txt",(err)=> {
    if(err)

    console.log("no file found")
else

   console.log("file deleted")
})


// to see the stats of particular file in folder
fs.stat("text2.js",(err,data) =>
 {
   if (err) 
        console.error("file error")
   else
    console.log(data)
    // is data in a file
    console.log(data.isFile())
   
 })

 fs.readFile("text2.txt",(err,data)=>
  {
    if (err) 
         console.error("file error")
    else
          console.log(data)

 })
