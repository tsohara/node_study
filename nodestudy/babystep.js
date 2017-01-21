//console.log(process.argv)

var argv = process.argv
var result = 0;

argv.shift()
argv.shift()

argv.forEach(function(val, index, ar) {
    result += +val;
})

console.log(result)


