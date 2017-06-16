const Base = require('./Base');

class Item extends Base {
    constructor(userId, text) {
        super();
        this.userId = userId;
        this.text = text;
    }
}

module.exports = Item;