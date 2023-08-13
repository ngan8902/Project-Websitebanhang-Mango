const mysql = require('./model')

mysql.connection(() => {
    mysql.triggerTables();
})