"use strict"

const mysql = require('mysql');
const express = require('express');
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
app.post('/UserLogin', (req, res) => {
    let item = req.body;   
    var dbCmd = "SElECT Password FROM members WHERE Username = " + '\'' + item.account + '\'';
    console.log(dbCmd);
    mysqlConnection.query(dbCmd, (err, rows, fields) => {
        var status;

        if(err){status = false;}
        else if(rows.length === 0 || rows[0].Password !== item.password){status = false;}
        else {status = true;}
        
        res.send(status);
    })
})

app.listen(8080, ()=>{
    console.log('Express server is now running and listen on port 8080.');
})