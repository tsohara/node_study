var express = require('express')
var stylus = require('stylus')
var app = express()

// console.log(process.argv[2])
// console.log(process.argv[3])

app.use(stylus.middleware(process.argv[3]))
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))

app.listen(process.argv[2])



