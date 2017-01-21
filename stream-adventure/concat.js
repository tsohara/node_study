var concat = require('concat-stream')

process.stdin
    .pipe(concat(function (input) {
        process.stdout.write(input.toString().split("").reverse().join(""))
    }))
