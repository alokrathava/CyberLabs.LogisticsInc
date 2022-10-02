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
};

app.listen(port, createServer);
/*- -------------------------------Middleware---------------------------------*/

/*---------------------------------Routing------------------------------------*/
app.get("/", (req, res) => {
    req.header("Content-Type", "text/html");
    res.status(statusCode.OK).sendFile(path.join(__dirname + "/views/index.html"), (err) => {
        if (err) {
            res.status(statusCode.INTERNAL_SERVER_ERROR).send(err);
        }
    });
});

app.get("/track", (req, res) => {
    req.header("Content-Type", "text/html");
    res.status(statusCode.OK).sendFile(path.join(__dirname + "/views/track.html"), (err) => {
        if (err) {
            res.status(statusCode.INTERNAL_SERVER_ERROR).send(err);
        }
    });
});

app.get("/contact", (req, res) => {
    req.header("Content-Type", "text/html");
    res.status(statusCode.OK).sendFile(path.join(__dirname + "/views/contact.html"), (err) => {
        if (err) {
            res.status(statusCode.INTERNAL_SERVER_ERROR).send(err);
        }
    });
});

app.get("/login", (req, res) => {
    req.header("Content-Type", "text/html");
    res.status(statusCode.OK).sendFile(path.join(__dirname + "/views/login.html"), (err) => {
        if (err) {
            res.status(statusCode.INTERNAL_SERVER_ERROR).send(err);
        }
    });
});