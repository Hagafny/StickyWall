const Base = require('./Base');

class User extends Base {
    constructor(username, password) {
        super();
        this.username = username;
        this.password = password;
    }
}

module.exports = User;