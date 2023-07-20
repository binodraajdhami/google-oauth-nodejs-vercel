const express = require('express');
const morgan = require('morgan');
const path = require('path');

// create express app ============================
const app = express();
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, "public")));

// view engine setup ============================
app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', function (req, res, next) {
    res.render('home');
});

app.get('*', function (req, res, next) {
    res.render('404.ejs');
});

// server starting ============================
app.listen(8888, function (err, done) {
    if (err) {
        console.log('Server listen failed !');
    } else {
        console.log(`Server listening port at 8888 !`);
    }
});