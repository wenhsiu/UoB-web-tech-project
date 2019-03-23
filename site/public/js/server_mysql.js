'use strick'

const mysql = require('mysql');
const dbInfo = {
    host: 'localhost',
    user: 'root',
    password: 'root1234',
    database: 'projectdb',
    multipleStatemnts: true
};

var mysqlConnection;

function connect() {
    mysqlConnection = mysql.createConnection(dbInfo);
    mysqlConnection.connect((err) => {
    if(!err){console.log("DB connection success")}
    else throw err;    
    });
}

function get(){return mysqlConnection;}

function close(){
    mysqlConnection.end((err) => {
        if(err){throw err;}
    });
}

module.exports = {
    connect,
    get,
    close
};