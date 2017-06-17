const { getArray, writeArrayToFile } = require('./jsonFSService');
const filePath = './server/data/DB/users.json';

let addUser = (user) => {
    return new Promise((resolve, reject) => {
        getUsers().then(users => {
            let found = false;
            users.forEach(usr => {
                if (!found && usr.username == user.username && usr.password == user.password) {
                    found = true;
                    reject();
                }
            })

            if (found)
                return;

            users.push(user);
            writeArrayToFile(filePath, users)
                .then(() => resolve())
                .catch(() => reject());
        })
    })
};

let getUser = (userId) => {
    return new Promise((resolve, reject) => {
        getUsers()
            .then(users => {
                let found = false;
                users.forEach(user => {
                    if (!found && user.id == userId) {
                        found = true;
                        resolve(user);
                    }
                })

                if (!found)
                    reject();
            })
            .catch(() => reject());
    })
}

let verifyLogin = (username, password) => {
    return new Promise((resolve, reject) => {
        getUsers()
            .then(users => {
                let found = false;
                users.forEach(user => {
                    if (!found && user.username == username && user.password == password) {
                        found = true;
                        resolve(user);
                    }
                })

                if (!found)
                    reject();
            })
            .catch(() => reject());
    })
}

let getUsers = () => getArray(filePath);

module.exports = {
    getUser: getUser,
    verifyLogin: verifyLogin,
    addUser: addUser,
    getUsers: getUsers
}