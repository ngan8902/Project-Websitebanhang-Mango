'use strict'
const { products } = require('../data')
const JWT = require('jsonwebtoken')
const ProductModel = require('../model/product.repo')

class ProductController {

    static getProducts = async (req, res, next) => {
        try {

            const results = await ProductModel.getProducts()
            console.log(results)
            if (!results) throw new Error("Don't have data");
            res.status(200).json({
                message: 'Get product success!',
                data: results
            })

        }
        catch (err) {
            console.log(err)
            res.status(500).json({
                code: 500,
                message: 'Error::: c',
                error: err.message
            })
        }


    }

    static createProduct = (req, res, next) => {
        res.json({
            message: 'Get data success!',
            data: req.body
        })
    }
}

module.exports = ProductController