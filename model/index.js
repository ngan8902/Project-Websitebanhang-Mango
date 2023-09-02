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
        console.log("Table customer created!")
    });

    var sql1 = "CREATE TABLE products (name VARCHAR(255), address VARCHAR(255))";
    con.query(sql1, function (err, result){
        if(err) throw err;
        console.log("Table products created!")
    });
}

function triggerTablesAdmin() {
    var sql = 'CREATE TABLE shop (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, shopname VARCHAR(255) NOT NULL, address VARCHAR(255) NOT NULL, role ENUM("admin", "staff") NOT NULL, token VARCHAR(255))';
    con.query(sql, function (err, result){
        if(err) throw err;
        console.log("Table created!")
    });
}

module.exports = {
    con,
    connection,
    triggerDatabase,
    triggerTables,
    triggerTablesAdmin
}