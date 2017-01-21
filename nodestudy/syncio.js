var fs = require('fs')

var argv = process.argv

var buf = fs.readFileSync(argv[2])

//console.log(buf.toString());

var text = buf.toString();

var lineArray = text.split('\n');
//console.log(lineArray)
console.log(lineArray.length - 1);





