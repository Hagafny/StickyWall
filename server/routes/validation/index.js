const validationAPI = require('express').Router();
const itemService = require('../../logic/itemLogicService');
const handlers = require('./handlers');

validationAPI.post('/login/:username/:password', handlers.login);
validationAPI.post('/register/:username/:password', handlers.register);

module.exports = validationAPI; 