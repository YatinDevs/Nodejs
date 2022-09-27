// 12 Create a node program that print hello world in bold on web browser and start running server on port 8888.

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
    
    res.write("<h1>Welcome To Webpage.</h1>")
    res.write("<b>Hello World!! <b>")
    res.write("<b>Hello World!! <b>")
    res.write("<b>Hello World!! <b>")
    res.end() // without end function browser keeps 
    //buffering and expecting  more data from local host

})

server.listen(8888,()=> console.log(" server started at port 8888")) 
//8888 -port number it can be any other number
//runs on
//mysql -3306 xammp . wrk.bench
//oracle1521
// mongo 271027
//react 3000
// http : 8080   apache 


// to run this code
// node serverstart.js
// open web browser ---> localhost:8888

// 103.168.249.106/:8888 to run on connected pcs
// domain name = amazon facebook as we cant remember codes of server ip 


// npm i nodemon --g  
// npx nodemon serverstart.js  -- to run file to start server
// edit and refresh  webpage no need to re run program normally
