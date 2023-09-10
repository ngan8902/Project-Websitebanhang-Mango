'use strict'

const { connection, triggerTablesAdmin } = require('./index') // Destructuring
const CustomerModel = require('../model/customer.repo')
const CategoryModel = require('../model/category.repo')
const ProductModel = require('../model/product.repo')

connection(async () => {
    try {
        triggerTablesAdmin()
        await CustomerModel.initTableToDB() // promise
        await CategoryModel.initTableToDB()
        await ProductModel.initTableToDB()
        console.log('All tables created success:::::')
    } catch(err) {
        console.log(err)
    }
    // Chạy xong thoát chương trình
    process.exit()
})