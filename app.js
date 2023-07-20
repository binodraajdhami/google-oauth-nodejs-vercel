const express = require('express');
const morgan = require('morgan');
const path = require('path');

// create express app ============================
const app = express();
app.use(morgan('dev'));

app.get('/', function (req, res, next) {
    res.status(200).json({ msg: "Hello World" })
});

app.get('*', function (req, res, next) {
    res.status(200).json({ msg: "Hello World" })
});

// server starting ============================
app.listen(8888, function (err, done) {
    if (err) {
        console.log('Server listen failed !');
    } else {
        console.log(`Server listening port at 8888 !`);
    }
});