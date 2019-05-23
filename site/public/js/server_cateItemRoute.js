'use strick'

const express = require('express');
const router = express.Router();

let fs = require('fs');

let path = require('path');

const picPath = path.join(__dirname, '..', 'uploadpics');

router.get('/getItemsByCate', (req, res) => {
    let cateID = req.body.cateID;
    let cmd = "SELECT * FROM items WHERE Category = ? ;";

    const connection = res.app.locals.connection;
    connection.query(cmd, cateID, (err, rows) => {
        if(err){
            res.status(400).send().end();
        }else{
            res.send(rows);
        }
    })
})

router.get('/getImage', (req, res) => {
    res.sendFile(picPath + '/' + req.body.imgName);
})


module.exports = router;