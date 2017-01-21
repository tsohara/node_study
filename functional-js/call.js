module.exports = function duckCount() {
    var args = Array.from(arguments)
    return args.reduce(function(a, b) {
        if (Object.prototype.hasOwnProperty.call(b, 'quack')) {
            a++
        }
        return a
    }, 0)
}