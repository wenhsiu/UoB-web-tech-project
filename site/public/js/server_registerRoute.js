const express = require('express');
const router = express.Router();
const db = require('./server_mysql');

router.post('/UserRegister', (req, res) => {
    if(!req.body.account || req.body.account.length === 0){
        res.status(400); 
        return;
    }

    let item = req.body;   
    var dbCmd = "INSERT INTO members VALUES('" + item.account + "', '" + item.password + "', '" + item.hint + "')";

    const connection = req.app.locals.connection;
    connection.query(dbCmd, (err, result) => {        
        if(err){res.status(400);}
        else {
            console.log("record inserted");
            res.status(200);
        }
    });
});

module.exports = router;