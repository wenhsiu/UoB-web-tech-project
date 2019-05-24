'use strick'

const express = require('express');
const router = express.Router();
const limit = 5;

let fs = require('fs');
let path = require('path');

const picPath = path.join(__dirname, '..', 'uploadpics');

router.get('/getLatestItems', (req, res) => {   
    let cmd = "SELECT ItemName, Details, Id FROM items ORDER BY Id DESC LIMIT " + limit + " ;";

    const connection = res.app.locals.connection;
    connection.query(cmd, (err, rows) => {
        if(err){
            res.status(400).send().end();
        }else{
            res.send(rows);
        }
    })
})

router.get('/public/:id', (req, res) => {     
    let cmd = "SELECT COUNT(*) AS NUM FROM items WHERE Id = ? ;";
    const connection = res.app.locals.connection;
    connection.query(cmd, req.params.id, (err, rows) => {
        if(err){
            console.log(err);
            res.status(400).send();
        }else if(rows[0].NUM === 0){            
            res.status(502).send();
        }else{            
            res.sendFile(path.join(__dirname, '..', 'item.html'));
            
        }
    })
})

router.get('/public/*', (req, res) => {    
    res.sendFile(path.join(__dirname, '..', '..', req.originalUrl));    
})

router.get('/getItemsByCate/*', (req, res) => {
    let cateID = req.param.cate;
    let cmd = "SELECT ItemName, Details, Id FROM items WHERE Category = ? ;";

    const connection = res.app.locals.connection;
    connection.query(cmd, cateID, (err, rows) => {
        if(err){
            res.status(400).send().end();
        }else{
            res.send(rows);
        }
    })
})

router.get('/getOneItemById/*', (req, res) => {
    let ID = req.params.ID;
    let cmd = "SELECT * FROM items WHERE Id = ? ;";

    const connection = res.app.locals.connection;
    connection.query(cmd, ID, (err, rows) => {
        if(err){
            res.status(400).send().end();
        }else{
            res.send(rows);
        }
    })
})

router.get('/getImage/*', (req, res) => {        
    res.sendFile(picPath + "/" + req.url.split("/getImage/")[1]);
})


module.exports = router;