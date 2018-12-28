const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
var morgan = require('morgan');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

mongoose.Promise = global.Promise;

var router = require('./server/routes/routes');

mongoose.connect('mongodb://localhost:27017/mean-app')
    .then(() => console.log("We are connected with mongodb"))
    .catch((err) => console.log(err));

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, '/node_modules')));

app.use("/api", router);
app.use("/api/login", router);
app.use("/api/signup", router);

app.get('*', function(req, res) {
   res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(3000, function () {
    console.log('Server is running on port 3000.');
});
