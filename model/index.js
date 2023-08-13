var mysql = require('mysql')

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "mango"
});

function connection(cb) {
    con.connect(function(err){
        if(err) throw err;
        console.log("Connected!");
        cb && cb();
    });
}

function triggerDatabase() {
    con.query("CREATE DATABASE mango", function (err, result){
        if(err) throw err;
        console.log("Database created");
    });
}

function triggerTables() {
    var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
    con.query(sql, function (err, result){
        if(err) throw err;
        console.log("Table created!")
    });

    var sql1 = "CREATE TABLE products (name VARCHAR(255), address VARCHAR(255))";
    con.query(sql1, function (err, result){
        if(err) throw err;
        console.log("Table created!")
    });
}

module.exports.connection = connection;
module.exports.triggerDatabase = triggerDatabase;
module.exports.triggerTables = triggerTables;