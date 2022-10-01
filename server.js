/*- --------------------------Variable Declarations-------------------*/
const http = require('http');
const express = require('express');
const app = express();
let path = require('path');
const utils = require('./utils');
const bodyParser = require('body-parser');

let statusCode = {
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
    INTERNAL_SERVER_ERROR: 500
};

const port = process.env.PORT || 80;
app.use(express.static('public'));


let createServer = () => {
    console.log(`Express server listening on port ${port}`);
}

app.listen(port, createServer);
/*- --------------------------Middleware-------------------*/


/*-------------------------------Website------------------*/
app.get('/', (req, res) => {
    req.header('Content-Type', 'text/html');
    res.status(statusCode.OK).send('Hello World!');
});

app.use(res, req => {
    req.header('Access-Control-Allow-Origin', '*');
    res.status(statusCode.NOT_FOUND).sendfile(path.join(__dirname, './views/404.html'));
})