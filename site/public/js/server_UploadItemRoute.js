'use strict'

const express = require('express');
const router = express.Router();

let fs = require('fs');

let multer = require('multer');
let upload = multer();
let path = require('path');

let imgName;
let currDate;
let uploadDate;
let uploadTime;

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, filePath);
      },
      filename: function (req, file, cb) {
        currDate = new Date();

        uploadDate = currDate.getFullYear() + "-" + currDate.getMonth() + "-" + currDate.getDate(); 
        uploadTime = currDate.getHours() + "-" + currDate.getMinutes() + "-" + currDate.getSeconds();
        imgName = username + '_' + uploadDate + "_" + uploadTime + ".jpg";
        cb(null, imgName);
      }
});
let store = multer({storage: storage});

let username;
const filePath = path.join(__dirname, '..', 'uploadpics');

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
    username = req.body.foo;

    if(!fs.existsSync(filePath)){
       try{
        fs.mkdir(filePath);
        }catch(err){
            console.log("File path not available");
            res.status(400).send();
        }
    }else{
        res.status(200).send();
    }
})

router.post('/UploadItem/Image', store.single('file'), (req, res, next) => {
    console.log("file saved: " + filePath);
    console.log("success");
    res.status(204).send();
    }
)

router.post('/UploadItem/Details', upload.array('detail'), (req, res, next) => {
    const connection = req.app.locals.connection;    
    let dbCmd = "INSERT INTO items VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?);";
    let dbCateCmd = "SELECT id FROM categories WHERE name = ?;";

    connection.query(dbCateCmd, [req.body["cate"]], (err, rows)=> {
        if(err){
            res.status(400).send().end();
        }else{
            connection.query(dbCmd, 
                            [req.body["name"],
                             req.body["description"],
                             username,
                             req.body["exchangeItem"],
                             uploadDate,
                             imgName,
                             rows[0].id,
                             req.body["location"],
                             null],                                     
                            (err, result) => {
                                if(err){
                                    res.status(400).send();
                                    console.log(JSON.stringify(err));
                                }else{res.status(200).send();}
            })
        }
    })
})

module.exports = router;