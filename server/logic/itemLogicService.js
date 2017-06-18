const itemDataService = require('./../data/itemDataService');
const userDataService = require('./../data/userDataService');
const Item = require('./../classes/Item');

// Add the item and when you get and itemId back, also get the user associated with the userId
// and add him to the item object
let addItem = (userId, text) => {
    return new Promise((resolve, reject) => {
        itemDataService.addItem(new Item(userId, text))
            .then(item => {
                userDataService.getUser(userId)
                    .then(user => {
                        item.user = user;
                        delete item.user.password;
                        delete item.userId;
                        resolve(item);
                    })
                    .catch(() => reject());
            })
            .catch(() => reject());
    })
}

// Get the item and get the user that is inside his userId and combine them
let getItem = itemId => {
    return new Promise((resolve, reject) => {
        itemDataService.getItem(itemId)
            .then(item => {
                userDataService.getUser(item.userId)
                    .then(user => {
                        item.user = user;
                        delete item.userId;
                        delete item.user.password;
                        resolve(item);
                    })
            })
            .catch(() => reject());
    })
}


let deleteItem = itemId => itemDataService.deleteItem(itemId)

// update the Item and afterwards add the user that has written the idem.
let updateItem = item => {
    return new Promise((resolve, reject) => {
        itemDataService.updateItem(item)
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

// Get all the items and all the users at the same time, 
// create a dictionary that stores all the users as a map 
// Add each user to the item
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