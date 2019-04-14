const express = require('express');
const router = express.Router();

router.post('/UserRegister', (req, res) => {
    if(!req.body.account || req.body.account.length === 0){
        res.status(400); 
        return;
    }
    let item = req.body;
    let dbCmd = "INSERT INTO members VALUES(?, ?, ?)";

    const connection = req.app.locals.connection;
    connection.query(dbCmd, [item.account, item.password, item.hint], (err, result) => {        
        if(err){res.status(400).send();}
        else {
            console.log("record inserted");
            res.status(200).send();
            }            
        }
    );
});

module.exports = router;