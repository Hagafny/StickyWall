const uuid = require('uuid');
const uuidV1 = require('uuid/v1');

exports.generate = () => uuidV1().replace(new RegExp('-', 'g'), '');


