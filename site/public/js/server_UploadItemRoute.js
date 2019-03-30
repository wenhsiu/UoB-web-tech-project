'use strict'

const express = require('express');
const router = express.Router();
let multer = require('multer');
let upload = multer();

router.get('/Categories', (req, res) => {

    let dbCmd = "SELECT * FROM Categories";

    const connection = req.app.locals.connection;
    connection.query(dbCmd, (err, rows) => {        
        if(err){res.status(400);}
        else {
            res.send(rows);
        }
    });
});

router.post('/UploadItem', upload.array(), (req, res) => {
    //TODO: save file into local disk
    console.log(req.body.ItemInfo);
    console.log(req.body.username);
})

module.exports = router;