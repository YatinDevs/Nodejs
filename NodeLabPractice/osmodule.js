//core module os
// 9 Demonstrate “os” module functions on console
const os = require('os')

const path = require('path')
console.log("os.tmpdir() : " + os.tmpdir())
console.log("os.platform() : " + os.platform())
console.log("os.freemem() : " + os.freemem())
console.log("os.homedir() : " + os.homedir())
console.log("os.hostname() : " + os.hostname())
console.log("os.endianness() : " + os.endianness())
console.log("os.loadavg() : " + os.loadavg())
console.log("os.release() : " + os.release())

// core path module
//file upload
// will give the name of file
var x=path.basename('/data/OsFile1.txt')
console.log(x)
// removes extension and gives name of file
var x1=path.basename('/data/OsFile2.txt','.txt')
console.log(x1)
// detail of the entered path
var p1=path.parse('/user/data/db/xyz.txt')
console.log(p1)

var d= path.dirname('/user/data/db/xyz.txt')
console.log(d)

var e= path.extname('/user/data/db/xyz.txt')
console.log(e)