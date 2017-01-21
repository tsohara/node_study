var duplexer2 = require('duplexer2')
var through = require('through2').obj

module.exports = function (counter) {
    var count = {}
    var stream = through(write, end)
    return duplexer2({objectMode: true}, stream, counter)

    function write(buffer, encoding, next) {
        count[buffer.country] = (count[buffer.country] || 0) + 1
        next()
    }

    function end(done) {
        counter.setCounts(count)
        done()
    }
};