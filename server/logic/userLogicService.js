const dataService = require('./../data/userDataService');
const User = require('./../classes/User');

let addUser = (username, password) =>
    dataService.addUser(new User(username, password));


let getUser = (username, password) =>
    dataService.getUser(username, password);


module.exports = {
    addUser: addUser,
    getUser: getUser
}