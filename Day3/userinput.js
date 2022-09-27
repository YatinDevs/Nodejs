//wap to ask name and age of a person and store it in a file 

// npm i prompt-sync
// npm i prompt-sync --g (global installation)
var fs= require('fs')
//third party  module
var prompt =require('prompt-sync')()
var name= prompt("enter name")
console.log(name)

var age= prompt("enter age")
console.log(age)

var data=name +" "+ age

fs.writeFile("person.txt",data ,()=>{console.log("data written")})