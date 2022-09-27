//wap to write some message in a file 
var fs=require('fs')

//async  - non blocking 
//with regular function
fs.writeFile("s1.txt","manish" ,function(err) // call back function throws err if any and then goes into function for console command
{
    console.log("data written")
})

// with arrow based function 
fs.writeFile("s1.txt","satish" ,(err) =>// call back function using arrow function throws err if any and then goes into function for console command
{
    if (err)
    
     console.log("error occurred")

    else

     console.log("data written")
})