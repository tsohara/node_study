var http = require('http')
var fs = require('fs')

var argv = process.argv

var port = argv[2]
var file = argv[3]

var server = http.createServer(function (request, response) {
    fs.createReadStream(file).pipe(response)
})

server.listen(port)