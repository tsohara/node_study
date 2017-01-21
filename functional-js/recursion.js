module.exports = function reduce(arr, fn, initial) {
    console.log(arr)
    console.log(initial)
    if (!arr.length) return initial
    var head = arr[0]
    var obj = fn(initial, head, 0, null)
    var tail = arr.slice(1)
    return reduce(tail, fn, obj)
}