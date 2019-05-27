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
    connection.query(cmd, req.params.username, (err, rows) => {
        if(err){
            res.status(400).send();
        }else{
            res.send(rows);
        }
    })
})

router.get('/getImage/:details', (req, res) => {       
    res.sendFile(picPath + "/" + req.params.details);
})

router.post('/likeItem/:itemId', (req, res) => {
    let username = req.body.username;
    let itemId = req.params.itemId;

    cmd = "SELECT LikeItem FROM likes WHERE Username = ? AND ItemId = ? ;";
    insertCmd = "INSERT INTO likes VALUES(?, ?, ?);";
    updateCmd = "UPDATE items SET 'Username' = ?, 'ItemId' = ?, LikeItem = ?;"

    const connection = res.app.locals.connection;
    connection.query(cmd, [username, itemId], (err, rows) => {
        if(err){
            res.status(400).send();
        }else{
            if(rows.length === 0){
                connection.query(insertCmd, [username, itemId, true], (err, rows) => {
                    if(err){
                        res.status(400).send();
                    }else{
                        res.send('You liked the item.');
                    }
                });
            }else{                
                connection.query(updateCmd, [username, itemId, !rows[0].LikeItem], (err, subrows) => {
                    if(err){
                        res.status(400).send();
                    }else{
                        res.send('Set liked this item to ' + !rows[0].LikeItem);
                    }
                })                
            }
        }
    })
})

module.exports = router;