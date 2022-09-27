var fs= require('fs')

var result = fs.readFileSync("readfile.js",(err,data)=>{
    console.log("======"+ data)
} )
console.log(result.toString())