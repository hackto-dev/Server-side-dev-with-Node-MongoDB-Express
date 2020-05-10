const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next(); 
    })
    .get((req, res, next) => {
        res.end('All the leaders to you!');
    })
    .post((req, res, next) => {
        res.end('Add the leader: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /leaders');
    })
    .delete((req, res, next) => {
        res.end('Delete all leaders');
    });

leaderRouter.route('/:leaderId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Details of leader: ' + req.params.leaderId);
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /leaders/' + req.params.leaderId);
    })
    .put((req, res, next) => {
        res.write('Update the leader: ' + req.params.leaderId + '\n');
        res.end('Update the leader: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .delete((req, res, next) => {
        res.end('Delete leader: ' + req.params.leaderId);
    });

module.exports = leaderRouter;