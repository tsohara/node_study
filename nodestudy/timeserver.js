var net = require('net')
var strftime = require('strftime')

var argv = process.argv

var port = argv[2]

var server = net.createServer(function (socket) {

    var time = strftime('%F %R')
    
    socket.write(time)
    socket.end("\n")

})

server.listen(port)