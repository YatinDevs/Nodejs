//core module os
const os = require('os')

const path = require('path')
console.log(os.tmpdir())
console.log(os.platform())
console.log(os.freemem())
console.log(os.homedir())
console.log(os.hostname())

// core path module
//file upload
// will give the name of file
var x=path.basename('/data/abc.txt')
console.log(x)

// removes extension and gives name of file
var x1=path.basename('/data/abc.txt','.txt')
console.log(x1)

// detail of the entered path
var p1=path.parse('/user/data/db/xyz.txt')
console.log(p1)

var d= path.dirname('/user/data/db/xyz.txt')
console.log(d)


var e= path.extname('/user/data/db/xyz.txt')
console.log(e)