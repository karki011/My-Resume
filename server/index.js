var path = require('path');
var express = require('express');
var bodyparser = require('body-parser');

var app = express();

var clientPath = path.join(__dirname, "../client");

app.use(bodyparser.json());
app.use(express.static(clientPath));

// app.use('/api', api);

app.listen(3000);
console.log("I am listening to you subash");