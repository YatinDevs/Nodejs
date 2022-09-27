//wap to write some message in a file 



var fs = require('fs')

fs.writeFile("newdata.txt","Nodejs",(err)=>{
    if (err) throw err

    console.log("data written to file")

})

