var express = require("express");
var mysql = require('mysql');
var client = require('./client.js');
var app = express();


var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'comshop'
});

function handle_database(req, res) {
    pool.getConnection(function (err, connection) {
        if (err) {
            res.json({"code": 100, "status": "Error in connection database"});
            return;
        }
        console.log('load Clients start');
       
       console.log('connected as id ' + connection.threadId);
            connection.query("select name from client", function (err, rows) {
                console.log('client');
                connection.release();
                if (!err) {
                    res.json(rows);
                }
            });
        
        connection.on('error', function (err) {
            res.json({"code": 100, "status": "Error in connection database"});
            return;
        });
    });
}

app.get("/", function (req, res) {
    handle_database(req, res);
});


app.get('/clients/:search', function (req, res) {

    pool.getConnection(function (error, conn) {
        if (error) {
            console.log("failed to obtain db connection");
            return null;
        }

        conn.query("select * from client where indexNo like '%" + req.params.search + "%' or name like '%" + req.params.search + "%' or nic like '%" + req.params.search + "%'", function (err, rows, fields) {
            conn.release();

            if (!err) {
                res.json(rows);
                return res;
            } else {
                console.log(err);
            }
        });

    });
});

app.listen(3000);