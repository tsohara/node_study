var fs = require('fs')

var argv = process.argv

fs.readFile(argv[2], function(err, data) {
    var text = data.toString();
    var lineArray = text.split('\n');
    console.log(lineArray.length - 1);
})

