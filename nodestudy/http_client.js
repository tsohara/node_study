var http = require('http')

var argv = process.argv

var url = argv[2]

http.get(url, function(response) {
    //response.setEncoding('utf8')
    var chunk = ""
    response.on('data', function(data) {
        chunk += data
    })
    response.on('end', function() {
        console.log(chunk.length)
        console.log(chunk)
    })
})