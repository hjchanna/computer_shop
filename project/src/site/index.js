(function () {
    var express = require("express");
    var bodyParser = require('body-parser');
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'mysql',
        database: 'comshop'
    });
    var app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    connection.connect(function (err) {
        if (!err) {
            console.log("Database is connected ... nn");
        } else {
            console.log("Error connecting database ... nn");
        }
    });

//    connection.end();

    app.get("/clients", function (req, res) {
        connection.query('SELECT * from client', function (err, rows, fields) {

            if (!err) {
                res.json(rows);
            } else
                console.log('Error while performing Query.');
        });
    });

    app.get('/clients/:search', function (req, res) {
        connection.query("select * from client where indexNo like '%"+req.params.search+"%' or name like '%"+req.params.search+"%' or nic like '%"+req.params.search+"%'", function (err, rows, fields) {
            if (!err) {
                res.json(rows);
            } else {
                console.log(err);
            }

        });
    });
    app.delete('/client_delete/:id', function (req, res) {
        connection.query("delete from client where indexNo = " + req.params.id, function (err, client) {
            if (!err) {
                res.json({message: "deleted"});
            } else {
                console.log(err);
            }

        });
    });
    var client = {
        "indexNo": null,
        "number": 4,
        "name": "kaza",
        "contact_name": "lal",
        "nic": "5466768V",
        "address": "address",
        "contact_no": 542425664,
        "email": "@gmail.com",
        "client_type": "SUPPLIER"
    };
    app.post('/insert_client', function (req, res) {
//        console.log(req);

        connection.query("insert into client set ?", client, function (err, client) {
            if (!err) {
                res.json({message: "Save Success.."});
            } else {
                console.log(err);
            }

        });
    });

    app.listen(9000);
}());