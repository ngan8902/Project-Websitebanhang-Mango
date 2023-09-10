'use strict'

const { connection, triggerTablesAdmin } = require('./index') // Destructuring
const CustomerModel = require('../model/customer.repo')
const CategoryModel = require('../model/category.repo')
const ProductModel = require('../model/product.repo')

connection(() => {
    triggerTablesAdmin()
    CustomerModel.initTableToDB()
    CategoryModel.initTableToDB()
    ProductModel.initTableToDB()

    process.exit()
})