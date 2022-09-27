/*
  13 Use “http “ module Create a node application that print different message on browser on different url
  Hint:
   Like if user entered localhost :8888/ then display welcome to index page
   If user entered localhost : 8888/student  then display “welcome to student world “

   Hint  var http = require('http'); // Import Node.js core module

   var server = http.createServer(function (req, res)request {   //create web server
    if (req.url == '/') { //check the URL of the current 

*/

var http = require('http')

// request and response --> arugements passed
var server = http.createServer((req,res)=>{
    if (req.url == '/')
    res.write("<h1>Welcome To Webpage.</h1>")
    res.write("<b>Index Page. <b>")
    res.write("<b>Hello World!! <b>")
    res.write("<b>Continue With Index Page. <b>")
    res.end() // without end function browser keeps 
    //buffering and expecting  more data from local host

})
/*
var server = http.createServer((req,res)=>{
  
if (req.url == '/student')
res.write("<h1>Welcome To Webpage.</h1>")
res.write("<b>Student Page. <b>")
res.write("<b>Hello World!! <b>")
res.write("<b>Welcome to Student World. <b>")
res.end() // without end function browser keeps 
//buffering and expecting  more data from local host
})
*/
server.listen(8888,()=> console.log(" server started at port 8888")) 
//8888 -port number it can be any other number

