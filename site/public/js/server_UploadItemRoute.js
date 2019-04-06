'use strict'

const express = require('express');
const router = express.Router();

let fs = require('fs');

let multer = require('multer');
let upload = multer();
let path = require('path');
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, filePath);
      },
      filename: function (req, file, cb) {
        cb(null, username + '_' + Date.now() + ".jpg");
      }
});
let store = multer({storage: storage});

let username;
let itemname;
let exchangeItem;
let location;
let description;
let category;
let image;
let filePath;

router.get('/Categories', (req, res) => {

    let dbCmd = "SELECT * FROM Categories";

    const connection = req.app.locals.connection;
    connection.query(dbCmd, (err, rows) => {        
        if(err){res.status(400).end();}
        else {
            res.send(rows);
        }
    });
});

router.post('/UploadItem/Username', (req, res, next) => {
        
    filePath = path.join(__dirname, '..', 'img', req.body.foo);
    username = req.body.foo;
    if(!fs.existsSync(filePath)){
        res.status(400).end();
        console.log("Invalid file path: " + filePath);
        return;
    }
    console.log(filePath);
    }
)

router.post('/UploadItem/Image', store.single('file'), (req, res, next) => {
    console.log("file saved: " + filePath);
    console.log("success");
    console.log(req.file);
    res.status(204);
    }
)

router.post('/UploadItem/Details', upload.array('detail'), (req, res, next) => {
    console.log(req.body.name);
}, (err) => {
        if(err){res.status(400).send("Cannot get file path");}
}
)

module.exports = router;