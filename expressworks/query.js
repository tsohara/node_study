var express = require('express')
var app = express()

// console.log(process.argv[2])
// console.log(process.argv[3])

app.get('/search', function(req, res) {
    res.send(req.query)
})

app.listen(process.argv[2])



