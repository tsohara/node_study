function loadUsers(userIds, load, done) {
    var users = []
    var num = 0


    userIds.forEach(function(id, index) {
        load(id, function(user) {
            users[index] = user
            num++
            if (num === userIds.length) {
                return done(users)
            }
        })
    })

}

module.exports = loadUsers