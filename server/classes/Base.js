const uniqueIDGenerator = require('./../uniqueIDGenerator');

 class Base {
    constructor() {
        this.id = uniqueIDGenerator.generate();
    }
}

module.exports = Base;