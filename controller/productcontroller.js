const { products } = require('../data')

class ProductController {

    static getProducts = (req, res, next) => {
        // logic code
        res.json({
            data: products
        })
    }

    static createProduct = (req, res, next) => {

    }
}

module.exports = ProductController