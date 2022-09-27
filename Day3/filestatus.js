var fs = require("fs");


fs.stat('filestatus.js', function (err, stats) // or (err,x) =>
 {
   if (err) {
       return
        console.error(err);
   }
   console.log(stats);  
 
   console.log("Got file info successfully!");
   
   // Check file type
   console.log("isFile ? " + stats.isFile());
   console.log("isDirectory ? " + stats.isDirectory());  
});

