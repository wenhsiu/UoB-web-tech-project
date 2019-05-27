'use strick'

const express = require('express');
const router = express.Router();

let fs = require('fs');
let path = require('path');

const picPath = path.join(__dirname, '..', 'uploadpics');
/*
router.get('/getLikedItemsByUsername/:username', (req, res) => {   
    let cmd = "SELECT ItemId FROM likes WHERE Username = ? AND LikeItem = true ;" ;    

    const connection = res.app.locals.connection;
    connection.query(cmd, req.params.username, (err, rows) => {
        if(err){
            res.status(400).send().end();
        }else{
            res.send(rows);
        }
    })
})
*/

router.get('/getItemsDetailedInfo/:username', (req, res) => {
    let cmd = "SELECT I.ItemName, I.Details, I.Id FROM items I INNER JOIN likes L ON I.Id = L.ItemId " +
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
