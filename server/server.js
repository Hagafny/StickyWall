const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userService = require('./logic/userLogicService');
const itemService = require('./logic/itemLogicService');

app.set('port', (process.env.PORT || 3000));

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json());
app.use(express.static('dist'));

app.post('/register/:username/:password', (req, res) => {
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
})

app.post('/login/:username/:password', (req, res) => {
    let { username, password } = req.params;

    userService.getUser(username, password)
        .then(user => {
            delete user.password;
            res.status(200).json(user);
        })
        .catch(() => res.status(500).json({
            meesage: 'Wrong credentials'
        }));
})

app.post('/item', (req, res) => {
    let { text, userId } = req.body;

    itemService.addItem(userId, text)
        .then(item => {
            res.status(200).json({
                message: `Item added`
            });
        })
})

app.get('/item/:id', (req, res) => {
    let { id } = req.params;
    itemService.getItem(id).then(item => {
        res.status(200).json(item);
    })
        .catch(() => res.status(404).json({
            meesage: 'Invalid item'
        }));
})

app.put('/item', (req, res) => {
    let item = {
        id: req.body.id,
        text: req.body.text,
        userId: req.body.userId
    };

    itemService.updateItem(item).then(() =>
        res.status(200).json({
            message: `Item edited`
        }))
        .catch(() =>
            res.status(404).json({
                message: `Invalid item`
            }))
})

app.delete('/item/:id', (req, res) => {
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

})

app.get('/items', (req, res) => {
    itemService.getItems().then(items => {
        res.status(200).json(items);
    });
})

app.listen(app.get('port'), function () {
    console.log('running on port', app.get('port'))
})