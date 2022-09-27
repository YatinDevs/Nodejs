//core module os
const os = require('os')

const path = require('path')
console.log(os.tmpdir())
console.log(os.platform())
console.log(os.freemem())
console.log(os.homedir())
console.log(os.hostname())


//file upload
/*
var x=path.basename('/data/abc.txt')
console.log(x)

var x=path.basename('/data/abc.txt','.txt')
console.log(x1)

var p1=path.parse('/user/data/db/xyz.txt')
console.log(p1)
*/