var fs = require('fs')

var argv = process.argv

var dir = argv[2]
var extension = argv[3]

fs.readdir(dir, function(err, list) {
    list.forEach(function(val, index, ar) {
        if (val.indexOf('.' + extension) !== -1) {
            console.log(val)
        }
    })
})

