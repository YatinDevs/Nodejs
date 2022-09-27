// Create a node program that write “hello world “
// to  file  “test.txt” using “fs “ module.
const fs = require('fs');
fs.writeFile("test.txt","Hello World",(error,data)=>{

    if(error) {
        return console.log(error);
    }
    console.log("Your file was saved!");

})

