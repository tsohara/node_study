var fs = require('fs')

module.exports = function (dir, extension, callback) {
    var files = [];

    fs.readdir(dir, function (err, list) {
        if (err) {
            return callback(err)
        }

        list.forEach(function (val, index, ar) {
            if (val.indexOf('.' + extension) !== -1) {
                files.push(val)
            }
        })
        callback(null, files)
    })
}
