"use strict"

const db = require('./public/js/server_mysql');
const express = require('express');
var app = express();

app.use(require('body-parser').json());
app.use(require('./public/js/server_loginRoute'));
app.use(require('./public/js/server_registerRoute'));
app.use(require('./public/js/server_UploadItemRoute'))

db.connect();
var connection = db.get();
app.locals.connection = connection;

app.get('/*', (req, res)=>{
    var page = req.originalUrl;
    res.sendFile("public/" + page, {root: __dirname});
});

const port = process.env.PORT || 8080;
app.listen(port, ()=>{
   console.log('Express server is now running and listen on port 8080 ...');
});