'use strict'

const { connection, triggerTables, triggerTablesAdmin } = require('./index') // Destructuring
const CustomerModel = require('../model/customer.repo')

connection(() => {
    // triggerTables()
    triggerTablesAdmin()
    CustomerModel.initTableToDB()
})