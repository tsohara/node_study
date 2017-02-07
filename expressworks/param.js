var express = require('express')
var app = express()

// console.log(process.argv[2])
// console.log(process.argv[3])

app.put('/message/:ID', function (req, res) {
    res.send(require('crypto')
        .createHash('sha1')
        .update(new Date().toDateString() + req.params.ID)
        .digest('hex'))
})

app.listen(process.argv[2])



