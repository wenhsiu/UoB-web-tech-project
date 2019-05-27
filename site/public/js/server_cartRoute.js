'use strick'

const express = require('express');
const router = express.Router();

let fs = require('fs');
let path = require('path');

const picPath = path.join(__dirname, '..', 'uploadpics');

router.get('/getItemsDetailedInfo/:username', (req, res) => {
    let cmd = "SELECT I.ItemName AS ItemName, I.Details AS Details, I.Id AS Id FROM items I INNER JOIN likes L ON I.Id = L.ItemId " +
              "INNER JOIN members M ON M.username = L.username WHERE M.username = ? AND L.LikeItem = true;";

    const connection = res.app.locals.connection;
    connection.query(cmd, req.params.id, (err, rows) => {
        if(err){
            res.status(400).send().end();
        }else{
            res.send(rows);
        }
    })
})

router.get('/getImage/:details', (req, res) => {       
    res.sendFile(picPath + "/" + req.params.details);
})

module.exports = router;