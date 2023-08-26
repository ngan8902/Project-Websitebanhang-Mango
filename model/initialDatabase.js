'use strict'

const { connection, triggerTables, triggerTablesAdmin } = require('./index') // Destructuring

connection(() => {
    //triggerTables()
    triggerTablesAdmin()
})