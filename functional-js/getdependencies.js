function getDependencies(tree) {

    if (!tree.hasOwnProperty("dependencies")) {
        return [];
    }
    
    var dependencies = tree.dependencies;
    var result = [];

    Object.keys(dependencies).forEach(function (key) {
        var val = this[key];
        result.push(key + "@" + val.version);
        result = result.concat(getDependencies(val));
        console.log(val);
    }, dependencies);

    return result.sort().filter(function (x, i, self) {
        return self.indexOf(x) === i;
    });
}

module.exports = getDependencies