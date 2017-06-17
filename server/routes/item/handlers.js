const itemService = require('../../logic/itemLogicService');

let addItem = (req, res) => {
    let { text, userId } = req.body;
    itemService.addItem(userId, text)
        .then(item => {
            res.status(200).json(item);
        })
}

let getItem = (req, res) => {
    let { id } = req.params;
    itemService.getItem(id).then(item => {
        res.status(200).json(item);
    })
        .catch(() => res.status(404).json({
            meesage: 'Invalid item'
        }));
}

let updateItem = (req, res) => {
    let item = {
        id: req.body.id,
        text: req.body.text,
        userId: req.body.userId
    };
    itemService.updateItem(item)
        .then((itm) => {
            res.status(200).json(itm)
        })
        .catch(() =>
            res.status(404).json({
                message: `Invalid item`
            }))
}

let deleteItem = (req, res) => {
    let { id } = req.params;
    itemService.deleteItem(id)
        .then(() => {
            res.status(200).json({
                message: `Item deleted`
            })
        })
        .catch(() => {
            res.status(404).json({
                message: `Invalid item'`
            })
        })
}

module.exports = {
    addItem: addItem,
    getItem: getItem,
    updateItem, updateItem,
    deleteItem, deleteItem
}