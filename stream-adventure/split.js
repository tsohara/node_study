var through = require('through2')
var split = require('split')

var stream = through(write, end)

var num = 0

function write(buffer, encoding, next) {
    if (num++ % 2) {
        this.push(buffer.toString().toUpperCase() + '\n')
    } else {
        this.push(buffer.toString().toLowerCase() + '\n')
    }
    next()
}

function end() {

}

process.stdin
    .pipe(split())
    .pipe(stream)
    .pipe(process.stdout)