module.exports = function arrayMap(arr, fn) {
    return arr.reduce(function(acc, item, index, array) {
        acc.push(fn(item))
        return acc
    }, [])
}


