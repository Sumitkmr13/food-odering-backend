const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_CONNECTION_STRING, {
	useNewUrlParser: true,
	useUnifiedTopology: true
},function(err){
    if(err){
        console.log('error in db connection', err);
    }else{
        console.log('connection established');
    }
});
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const foodItemsRouter = require('./routes/foodItems');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/foodItems', foodItemsRouter);

module.exports = app;
