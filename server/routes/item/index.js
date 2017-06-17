const itemAPI = require('express').Router();
const uiCookieMiddleWare = require('../../uidCookieMiddleware.js');
const handlers = require('./handlers');

itemAPI.use(uiCookieMiddleWare);

itemAPI.post('/', handlers.addItem);
itemAPI.put('/', handlers.updateItem);
itemAPI.get('/:id', handlers.getItem);
itemAPI.delete('/:id', handlers.deleteItem);

module.exports = itemAPI; 