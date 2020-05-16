const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const dishRouter = require('./routes/dishRouter');
const promotionRouter = require('./routes/promotionRouter');
const leaderRouter = require('./routes/leaderRouter');

const url = 'mongodb://localhost:27017/assignment';

mongoose.connect(url, {
    useMongoClient: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then((db) => {
    console.log('Connected to database successfully');
},(err) => {
    console.log(err);
});

const app = express();

app.use(express.json());

app.use('/leaders',leaderRouter);
app.use('/dishes',dishRouter);
app.use('/promotions',promotionRouter);

