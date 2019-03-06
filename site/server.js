"use strict"

const mysql = require('mysql');
const express = require('express')
var app = express();
const bodyparer = require('body-parser');
app.use(bodyparer.json());

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root1234',
    database: 'projectdb',
    multipleStatemnts: true
});

mysqlConnection.connect((err) => {
    if(!err){console.log("DB connection success")}
    else{console.log("DB connection fail.\nError: " + JSON.stringify(err))}
})

app.get('/*', (req, res)=>{
    var page = req.originalUrl
    res.sendFile("public/" + page, {root: __dirname })
})
app.post('/*', (req, res) => {
    console.log(req.body);
    let item = req.body;
    var sql = "SET @ItemName = ?; SET @Description = ?; SET @OwnerId = ?; SET @Excahnge = ?; \
    SET @DATE = NOW(); SET @Details = ?; SET @Category = ?; SET @Id = ?";//define variables
})

app.listen(8080, ()=>{
    console.log('Express server is now running and listen on port 8080.');
})