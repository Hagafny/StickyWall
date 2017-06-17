const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const apiRoutes = require('./routes');

app.set('port', (process.env.PORT || 3000));
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static('./client/dist'));
app.use('/', apiRoutes);

app.listen(app.get('port'), function () {
    console.log('running on port', app.get('port'))
})