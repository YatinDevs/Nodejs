//wap to write some message in a file 
var fs=require('fs')


//async  - non blocking 
//with regular function
fs.writeFile("s1.txt","manish" ,
  function(err){
    console.log("data written")
})

// with arrow based function 
fs.appendFile("s1.txt","manish" ,
  (err)=>
  {
      if(err)
         console.log("error occured")
      else
        console.log("data written")
})

