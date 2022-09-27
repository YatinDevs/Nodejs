var fs = require('fs');
var stream = fs.createWriteStream("test1.txt");
stream.once('open', function(fd) {
  stream.write("Hello World \n");
  stream.write("Using CreateWriteStream to create File test1.txt\n");
  stream.write("Data inserted !!!!\n");
  stream.end();
});