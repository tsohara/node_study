var http = require('http'),
    map = require('through2-map'),
    ho  url = require('url')

var argv = process.argv

var port = argv[2]

var server = http.createServer(function (request, response) {
    var urlObj = url.parse(request.url, true)
    var iso = urlObj.query['iso']
    var data = ''
    
    if (urlObj.pathname == '/api/parsetime') {
        var date = new Date(iso)
        data = JSON.stringify({
            'hour' : date.getHours(),
            'minute' : date.getMinutes(),
            'second' : date.getSeconds()})
    }

    if (urlObj.pathname == '/api/unixtime') {
        var ut = new Date(iso).getTime()
        data = JSON.stringify({'unixtime' : ut})
    }

    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.write(data)
    response.end()
})

server.listen(port)

