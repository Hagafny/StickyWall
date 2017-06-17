const { getArray, writeArrayToFile } = require('./jsonFSService');
const filePath = './server/data/DB/items.json';

let addItem = (item) => {
    return new Promise((resolve, reject) => {
        getItems().then(items => {
            items.push(item);
            writeArrayToFile(filePath, items)
                .then(() => resolve(item))
                .catch(() => reject());
        })
        .catch(()=> reject());
    })
};

let getItem = (itemId) => {
    return new Promise((resolve, reject) => {
        getItems().then(items => {
            let found = false;
            items.forEach(item => {
                if (!found && item.id == itemId) {
                    found = true;
                    resolve(item);
                }
            })
            reject();
        });
    })
}

let deleteItem = (itemId) => {
    return new Promise((resolve, reject) => {
        getItems().then(items => {

            let itemIndex = -1;
            items.forEach((item, index) => {
                if (itemIndex == -1 && item.id == itemId)
                    itemIndex = index;
            })

            if (itemIndex == -1)
                reject();
            else {
                items.splice(itemIndex, 1);
                writeArrayToFile(filePath, items)
                    .then(() => resolve());
            }
        });
    })
}

let updateItem = (itemToAdd) => {
    return new Promise((resolve, reject) => {
        getItems().then(items => {

            let itemIndex = -1;
            items.forEach((item, index) => {
                if (itemIndex == -1 && item.id == itemToAdd.id)
                    itemIndex = index;
            })

            if (itemIndex == -1)
                reject();
            else {
                items[itemIndex] = itemToAdd;
                writeArrayToFile(filePath, items)
                    .then(() => resolve());
            }
        });
    })
}

let getItems = () => getArray(filePath);

module.exports = {
    getItem: getItem,
    addItem: addItem,
    deleteItem: deleteItem,
    updateItem: updateItem,
    getItems: getItems
}   