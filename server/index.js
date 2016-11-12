var path = require('path');
var express = require('express');
var bodyparser = require('body-parser');
var api = require('./api');
var utils = require('./utils');

var app = express();

var clientPath = path.join(__dirname, "../client");

app.use(bodyparser.json());
app.use(express.static(clientPath));

app.use('/api', api);

app.get('*', function (req, res, next) {
    if (utils.isAsset(req.url)) {
        return next();
    } else {
        res.sendFile(path.join(clientPath, 'index.html'));
    }
});


app.listen(3000);
console.log("I am listening to you subash");