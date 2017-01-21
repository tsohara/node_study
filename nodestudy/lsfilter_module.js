var module = require('./module.js')

var argv = process.argv

var dir = argv[2]
var extension = argv[3]

module(dir, extension, function (err, data) {
    if (err) {
        return
    }
    data.forEach((val, index, ar) => {
        console.log(val)
    })
})


