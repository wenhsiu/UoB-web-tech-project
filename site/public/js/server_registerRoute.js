const express = require('express');
const router = express.Router();

let fs = require('fs');
let path = require('path');

router.post('/UserRegister', (req, res) => {
    if(!req.body.account || req.body.account.length === 0){
        res.status(400); 
        return;
    }

    let item = req.body;   
    let dbCmd = "INSERT INTO members VALUES('" + item.account + "', '" + item.password + "', '" + item.hint + "')";
    
    var jsonPath = path.join(__dirname, '..', 'img', item.account);
    
    const connection = req.app.locals.connection;
    connection.query(dbCmd, (err, result) => {        
        if(err){res.status(400);}
        else {
            try{
                fs.mkdir(jsonPath);
                console.log("record inserted");
                res.status(200);
            }catch(err){
                console.log(JSON.stringify(err));
            }            
        }
    });
});

module.exports = router;