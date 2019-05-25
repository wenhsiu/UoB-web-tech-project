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

router.get('/browse/:id', (req, res) => {
    let cmd = "SELECT COUNT(*) AS NUM FROM categories WHERE id = ? ;";
    const connection = res.app.locals.connection;
    connection.query(cmd, req.params.id, (err, rows) => {
        if(err){
            console.log(err);
            res.status(400).send();
        }else if(rows[0].NUM === 0){            
            res.status(502).send();
        }else{            
            res.sendFile(path.join(__dirname, '..', 'browse.html'));
            
        }
    })   
})

router.get('/browse/*', (req, res) => {
    let filePath = req.params[0];    
    res.sendFile(path.join(__dirname, '..', filePath));    
})

router.get('/getItemsByCate/:id', (req, res) => {
    let cateID = req.params.id;
    let cmd = "SELECT I.ItemName AS ItemName, I.Details AS Details, C.name AS CateName FROM items I INNER JOIN categories C ON C.id = I.Category WHERE I.Category = ? ;";

    const connection = res.app.locals.connection;
    connection.query(cmd, cateID, (err, rows) => {
        if(err){
            console(err);
            res.status(400).send().end();
        }else{            
            res.send(rows);
        }
    })
})

router.get('/getOneItemById/:id', (req, res) => {
    let ID = req.params.id;
    let cmd = "SELECT * FROM items JOIN categories ON categories.id = items.Category WHERE items.Id = ? ;";

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