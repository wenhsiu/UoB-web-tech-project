const express = require('express');
const router = express.Router();

router.post('/UserLogin', (req, res) => {
    if(!req.body.account || req.body.account.length === 0){
        res.status(400); 
        return;
    }

    let item = req.body;   
    var dbCmd = "SELECT * FROM members WHERE Username = " + '\'' + item.account + '\'';

    const connection = req.app.locals.connection;
    connection.query(dbCmd, (err, rows, fields) => {
        if(err){res.status(400).send('');}
        else if(rows.length === 0){res.status(400).send('');}
        else if(rows[0].Password !== item.password){
            console.log(rows[0].PasswordHint);
            res.send(rows[0].PasswordHint);
        }
        else {res.status(200).send('');}
    });
});

module.exports = router;