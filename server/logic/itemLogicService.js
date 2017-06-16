const itemDataService = require('./../data/itemDataService');
const userDataService = require('./../data/userDataService');
const Item = require('./../classes/Item');

let addItem = (userId, text) => itemDataService.addItem(new Item(userId, text));

let getItem = itemId => {
    return new Promise((resolve, reject) => {
        itemDataService.getItem(itemId)
            .then(item => {
                userDataService.getUser(item.userId)
                    .then(user => {
                        item.user = user;
                        resolve(item);
                    })
            })
            .catch(() => reject());
    })
}


let deleteItem = itemId => itemDataService.deleteItem(itemId)

let updateItem = item => itemDataService.updateItem(item)

let getItems = () => {
    return new Promise((resolve, reject) => {
        Promise.all([userDataService.getUsers(), itemDataService.getItems()])
            .then(values => {
                let userMap = new Map();
                let users = values[0];
                let items = values[1];

                users.forEach(user => {
                    delete user.password;
                    userMap.set(user.id, user);
                })

                items.forEach(item => {
                    item.user = userMap.get(item.userId);
                    delete item.userId;
                })

                resolve(items);
            })
            .catch(() => reject());
    })
}

module.exports = {
    addItem: addItem,
    getItem: getItem,
    deleteItem: deleteItem,
    updateItem: updateItem,
    getItems: getItems
}