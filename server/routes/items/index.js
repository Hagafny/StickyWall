const itemsAPI = require('express').Router();
const uiCookieMiddleWare = require('../../uidCookieMiddleware.js');
const itemService = require('../../logic/itemLogicService');

itemsAPI.use(uiCookieMiddleWare);
itemsAPI.get('/', (req, res) => {
    itemService.getItems().then(items => {
        res.status(200).json(items);
    });
});

module.exports = itemsAPI; 