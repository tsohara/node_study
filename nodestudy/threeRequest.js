var http = require('http')

var argv = process.argv

var url1 = argv[2]
var url2 = argv[3]
var url3 = argv[4]

var resultArray = []

http.get(url1, function(response) {
    //response.setEncoding('utf8')
    var chunk = ""
    response.on('data', function(data) {
        chunk += data
    })
    response.on('end', function() {
        resultArray[0] = chunk
        printIfAllComplete()
    })
})

http.get(url2, function(response) {
    //response.setEncoding('utf8')
    var chunk = ""
    response.on('data', function(data) {
        chunk += data
    })
    response.on('end', function() {
        resultArray[1] = chunk
        printIfAllComplete()
    })
})

http.get(url3, function(response) {
    //response.setEncoding('utf8')
    var chunk = ""
    response.on('data', function(data) {
        chunk += data
    })
    response.on('end', function() {
        resultArray[2] = chunk
        printIfAllComplete()
    })
})

function printIfAllComplete() {
    if (resultArray[0] != null
    && resultArray[1] != null
    && resultArray[2] != null) {
        resultArray.forEach(function(val, index, ar) {
            console.log(val)
        })
    }
}