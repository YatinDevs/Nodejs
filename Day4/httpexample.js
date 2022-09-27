/*
node -----used--> serverside -----result----> webbrowser
through node we make webapplication---runs on---> webbrowser
webbrowser ------ understands-----> html
*/

// wap to design a node application that prints message on webbrowser
// with node to communicate with server we need to create a server
// appache /iis/glass fish

// http module
// standard portocol - hypertext transfer protocol

// protocol set of rules
// ftp- file transfer protocol

var http = require('http')

// request and response --> arugements passed
var server = http.createServer((req,res)=>{
    
    res.write("<h1>Student Management System</h1>")
    res.write("<u>Noida<u><br>")
    res.write("<u>Editing trying npx nodemon<u>")
    res.end() // without end function browser keeps 
    //buffering and expecting  more data from local host

})

server.listen(4000,()=> console.log(" server started at port 4000")) 
//4000 -port number it can be any other number
//runs on
//mysql -3306 xammp . wrk.bench
//oracle1521
// mongo 271027
//react 3000
// http : 8080   apache 


// to run this code
// node httpexample.js
// open web browser ---> localhost:4000

// 103.168.249.106/:4000 to run on connected pcs
// domain name = amazon facebook as we cant remember codes of server ip 


// npm i nodemon --g  
// npx nodemon httpexample.js  -- to run file to start server
// edit and refresh  webpage no need to re run program normally
