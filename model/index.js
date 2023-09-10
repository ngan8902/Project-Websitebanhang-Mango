var mysql = require('mysql')
const { promisify } = require('util')

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "mango"
});

function connection(cb) {
    con.connect(function(err){
        if(err) throw err;
        console.log("Database is Connected::::::");
        // Tạo ra một phương thức query mới nhưng là hàm promise
        con.querySync = promisify(con.query)
        cb && cb();
    });
}

function triggerDatabase() {
    con.query("CREATE DATABASE mango", function (err, result){
        if(err) throw err;
        console.log("Database created");
    });
}

function triggerTablesAdmin() {
    var sql = 'CREATE TABLE IF NOT EXISTS shop (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, shopname VARCHAR(255) NOT NULL, address VARCHAR(255) NOT NULL, role ENUM("admin", "staff") NOT NULL, token VARCHAR(255))';
    con.query(sql, function (err, result){
        if(err) throw err;
        console.log("Table created!")
    });
}

module.exports = {
    con,
    connection,
    triggerDatabase,
    triggerTablesAdmin
}