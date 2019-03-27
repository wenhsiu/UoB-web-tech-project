'use strict'

const express = require('express');
const router = express.Router();

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

module.exports = router;