const { products } = require('../data')
const JWT = require('jsonwebtoken')

class ProductController {

    static getProducts = (req, res, next) => {
        // logic code
        res.json({
            data: products
        })
    }

    static createProduct = (req, res, next) => {
        res.json({
            message: 'Get data success!',
            data: req.body
        })
    }
}

module.exports = ProductController