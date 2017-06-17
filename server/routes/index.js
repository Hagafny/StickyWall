const appAPI = require('express').Router();

const item = require('./item');
const items = require('./items');
const validation = require('./validation');

appAPI.use('/', validation);
appAPI.use('/items', items);
appAPI.use('/item', item);

module.exports = appAPI; 