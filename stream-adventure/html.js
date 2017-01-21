var trumpet = require('trumpet');
var through = require('through2')

var tr = trumpet();

var stream = tr.select('.loud').createStream()
stream.pipe(through(write, end)).pipe(stream)

function write(buffer, encoding, next) {
    this.push(buffer.toString().toUpperCase())
    next()
}

function end(end) {
    end()
}

process.stdin
    .pipe(tr)
    .pipe(process.stdout)