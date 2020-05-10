const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const morgan = require('morgan');

const dishRouter = require('./routes/dishRouter');
const leaderRouter = require('./routes/leaderRouter');
const promoRouter = require('./routes/promoRouter');

const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/dishes',dishRouter);
app.use('/leaders',leaderRouter);
app.use('/promotions',promoRouter);

app.use((req,res,next) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
});

const server = http.createServer(app);

server.listen(3000,'localhost',() => {
    console.log('Server listening on port 3000');
});