const dataService = require('./../data/userDataService');
const User = require('./../classes/User');

let addUser = (username, password) =>
    dataService.addUser(new User(username, password));

let verifyLogin = (username, password) =>
    dataService.verifyLogin(username, password);

module.exports = {
    addUser: addUser,
    verifyLogin: verifyLogin
}