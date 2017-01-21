var http = require('http')
var map = require('through2-map')

var argv = process.argv

var port = argv[2]

var server = http.createServer(function (request, response) {
    request.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
    })).pipe(response)
})

server.listen(port)