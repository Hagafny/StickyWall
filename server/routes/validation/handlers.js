const userService = require('../../logic/userLogicService');

let login = (req, res) => {
    let { username, password } = req.params;

    userService.verifyLogin(username, password)
        .then(user => {
            delete user.password;
            let expiryDate = 1000 * 60 * 60;  //1 Hour
            res.cookie("uid", user.id, { maxAge: expiryDate });
            res.status(200).json(user);
        })
        .catch(() => res.status(500).json({
            meesage: 'Wrong credentials'
        }));
}

let register = (req, res) => {
    let { username, password } = req.params;

    userService.addUser(username, password)
        .then(user => {
            res.status(200).json({
                message: `User ${username} added`
            });
        })
        .catch(() => res.status(500).json({
            message: `User already exists'`
        }));
}

module.exports = {
    login: login,
    register: register
}