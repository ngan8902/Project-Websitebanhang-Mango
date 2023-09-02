'use strict'
const JWT = require('jsonwebtoken')
const CustomerModel = require('../model/customer.repo')

const SECRECT_KEY = '123'

const authentication = (req, res, next) => {
    try {
        const token = req.headers["authorization"]
        if(!token ) throw new Error('Authen error')
        const verifyToken = JWT.verify(token, SECRECT_KEY)
        const { email, id } = verifyToken
        CustomerModel.getCustomerByEmail(email).then((foundCustomer) => {
            if(!foundCustomer) throw new Error('Authen fail')
            req.headers["customer-id"] = foundCustomer.id
            req.headers["customer-email"] = foundCustomer.email
            next()
        }).catch(() => {
            throw new Error('Authen fail')
        })
    } catch(err) {
        res.status(200).json({
            code: 500,
            message: 'Authen Error:::',
            error: err
        })
    }
}

module.exports = {
    authentication
}